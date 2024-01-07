<script setup>
const inputText = ref("")
const isValid = ref(false);

function isEmail(email) {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
}

watch(
    () => inputText.value,
    (newEmail) => {
        isValid.value = isEmail(newEmail);
    }
)

const isSuccess = ref(false);
function swap() {
    isSuccess.value = !isSuccess.value;
}

const points = ref([]);
points.value = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!"
];
</script>

<template>
    <div v-if="!isSuccess" class="flex flex-col lg:flex-row lg:gap-12 lg:p-4 bg-white rounded-3xl">
        <GraphicDesktop  class="lg:order-2 max-lg:hidden" />
        <GraphicMobile class="w-full lg:hidden" />
        <div class="flex flex-col gap-8 py-10 lg:py-20 px-4 lg:pr-4 lg:pl-8 lg:order-1">
            <h1 class="text-5xl text-theme-darkSlateGrey font-bold">Stay updated!</h1>
            <p class="text-theme-darkSlateGrey w-11/12">Join 60,000+ product managers receiving monthly updates on:</p>
            <div class="flex flex-col gap-4">
                <MainPoint v-for="point in points" :text="point" />
            </div>
            <div class="flex flex-col gap-2">
                <div class="flex justify-between">
                    <span class="text-xs font-bold text-theme-charcoalGrey">Email address</span>
                    <span v-if="!isValid" class="text-xs font-bold text-theme-base">Valid email required</span>
                </div>
                <input
                    class="bg-transparent border p-4 rounded-lg placeholder:text-theme-grey focus:outline-none"
                    :class="[ isValid ? 'border-theme-charcoalGrey' : 'border-theme-base' ]" placeholder="ail@company.com" v-model="inputText" />
                <MainButton @click="swap" class="disabled:cursor-not-allowed" :disabled="!isValid">Subscribe to monthly
                    newsletter</MainButton>
            </div>
        </div>
    </div>
    <div v-else class="flex flex-col justify-center gap-4 bg-white rounded-3xl px-4 lg:p-12 lg:max-w-md max-lg:absolute max-lg:inset-0">
        <IconSuccess class="mb-4" />
        <h2 class="text-4xl font-bold">Thanks for subscribing!</h2>
        <p class="">A confirmation email has been sent to ash@loremcompany.com.
            Please open it and click the button inside to confirm your subscription.
        </p>
        <MainButton class="" @click="swap">Dismiss message</MainButton>
    </div>
</template>s
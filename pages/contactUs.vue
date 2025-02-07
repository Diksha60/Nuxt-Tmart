<template>
    <div class="mt-[200px] container mx-auto flex flex-center pb-[100px]">
        <div>
            <q-form @submit.prevent="send">
                <p class="text-[24px] text-gray-700 text-center underline font-bold uppercase">send message</p>
                <div class="flex justify-between gap-10 mt-4">
                    <div>
                        <q-input 
                            v-model="name" 
                            class="min-w-[380px] text-[13px] focus:ring-0" 
                            placeholder="Your Name"
                            :rules="[
                                val => val && val.length > 0 || 'Please type your name'
                            ]"
                        />
                    </div>
                    <div>
                        <q-input 
                            v-model="email" 
                            class="min-w-[380px] text-[13px] focus:ring-0" 
                            placeholder="Your Email"
                            :rules="[
                                val => val && val.length > 0 || 'Please type your email adderss',
                                val => /.+@.+\..+/.test(val) || 'Incorrect email address',
                            ]"
                        />
                    </div>
                </div>
                <div class="mt-4">
                    <q-input 
                        v-model="subject" 
                        class="min-w-[380px] text-[13px]" 
                        placeholder="Subject"
                        :rules="[
                            val => val && val.length > 0 || 'Please type subject'
                        ]"
                    />
                </div>
                <div class="mt-4">
                    <q-input
                        v-model="message"
                        type="textarea"
                        class="min-w-[380px] text-[13px]" placeholder="Message"
                        :rules="[
                            val => val && val.length > 0 || 'Please type some message'
                        ]"
                    />
                </div>

                <div class="mt-10 border-[1px] border-gray-300 text-center py-2 w-[200px] hover:bg-[red] text-gray-700 hover:text-white tracking-[1.5px]">
                    <q-btn 
                        flat 
                        type="submit"
                        dense 
                        class="" 
                        label="send"
                    />
                </div>
            </q-form>
        </div>
    </div>
</template>

<script setup>
const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')

const send = () => {
    const data = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.val
    }

    localStorage.setItem('contcatData', JSON.stringify(data))
    alert("Thank you!!")
}

</script>
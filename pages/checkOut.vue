<template>
    <q-form @submit.prevent="submitData" class="flex flex-center mt-[100px] py-[100px]">
        <div>
            <div>
                <p class="text-[16px] font-bold">Name:</p>
                <div class="mt-2">
                    <q-input 
                        outlined 
                        v-model="name" 
                        type="text" 
                        label="Enter Your Name" 
                        class="min-w-[380px]"
                        :rules="[ val => val && val.length > 0 || 'Please type your name']" 
                    />
                </div>
            </div>
            <div class="mt-5">
                <p class="text-[16px] font-bold">Email:</p>
                <div class="mt-2">
                    <q-input 
                        outlined 
                        v-model="email" 
                        type="text" 
                        label="Enter Your Email Address"
                        :rules="[ 
                                    val => val && val.length > 0 || 'Please type your email address',
                                    val => /.+@.+\..+/.test(val) || 'Incorrect email address',
                                ]" 
                    />
                </div>
            </div>
            <div class="mt-5">
                <p class="text-[16px] font-bold">Phone Number:</p>
                <div class="mt-2">
                    <q-input 
                        outlined 
                        v-model="phone" 
                        type="number" 
                        label="Enter Your Phone Number"
                        :rules="[ 
                            val => val && val.length > 0 || 'Please type your phoneNumber',
                            val => val.length >= 10 || 'Phone number must be atleast 10 character'
                        ]" 
                    />
                </div>
            </div>
            <div class="mt-5">
                <p class="text-[16px] font-bold">Message:</p>
                <div class="mt-2">
                    <q-input 
                        outlined 
                        v-model="message" 
                        type="text" 
                        label="Type some message"
                        :rules="[ val => val && val.length > 0 || 'Please type something']" 
                    />
                </div>
            </div>
            <div class="mt-5">
                <q-btn 
                    flat
                    type="submit" 
                    class="bg-blue-500 px-10 py-3 text-white font-bold text-[16px] text-capitalize" 
                    label="Submit"
                />
            </div>
        </div>
    </q-form>
</template>

<script setup>
const name = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')

const submitData = () => {
    const data = ref({
        name: name.value,
        email: email.value,
        phone: phone.value,
        message: message.value
    })

    localStorage.setItem('userCheckOut', JSON.stringify(data))

}
</script>
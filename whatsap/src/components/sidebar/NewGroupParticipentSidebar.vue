<template>
    <main class="h-full w-full relative">
        <header class="w-full h-28 bg-custom-whatsapp-2 flex items-end p-4 text-white">
        <div class="flex items-center">
            <ArrowLeftIcon class="w-6 cursor-pointer" @click="onBack"/>
            <div class="font-semibold text-lg ml-4">
                Add group participants
            </div>
        </div>
    </header>
    <section class="px-4 py-2 border-b border-b-gray-300">
        <div class="mb-2 space-x-2 space-y-2">
            <Badge v-for="invitee in groupStore.newGroup.invitees" :text="invitee" 
            @click="groupStore.removeNewGroupInvitee(invitee)"  />
        </div>
        <input type="text" placeholder="Type contact name" @keyup.enter="onEnter" v-model="email"/>
    </section>
    </main>
</template>

<script setup lang="ts" >
import ArrowLeftIcon from '@heroicons/vue/24/solid/ArrowLeftIcon';
import { ref } from 'vue';
import { SidebarView , useGlobalStore } from '../../stores/globalStores';
import { useGroupStore } from '../../stores/gropStore';
import Badge from './Badge.vue';

const globalStore = useGlobalStore();
const groupStore = useGroupStore();

function onBack(){
    globalStore.showSidebarView(SidebarView.NEW_CHAT);
}

const email = ref("");

function onEnter(){
    groupStore.addNewGroupInvitee(email.value);
    email.value = "";
}

</script>
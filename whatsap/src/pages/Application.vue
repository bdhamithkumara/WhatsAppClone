<template>
    <main class="w-full h-full flex">
       <Sidebar>
        <ContactsSidebar v-if="sidebarView === SidebarView.CONTACTS"/>
        <NewChatSidebar v-if="sidebarView === SidebarView.NEW_CHAT"/>
        <NewGroupParticipentSidebar v-if="sidebarView == SidebarView.NEW_GROUP_PARTICIPANTS"/>
       </Sidebar>
        <!-- main content -->
    </main>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import ContactsSidebar from '../components/sidebar/ContactsSidebar.vue';
import NewChatSidebar from '../components/sidebar/NewChatSidebar.vue';
import NewGroupParticipentSidebar from '../components/sidebar/NewGroupParticipentSidebar.vue';
import Sidebar from '../components/sidebar/Sidebar.vue';
import { useGlobalStore , SidebarView } from '../stores/globalStores';

const globalStore = useGlobalStore();
const sidebarView = computed(() => globalStore.sidebarView);

</script>


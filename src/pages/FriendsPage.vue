<template>
  <FriendCard
    v-for="user in userFriendsList.friendsMoodUpdateList"
    :key="user.id"
    :user="user"
  />
</template>

<script>
import { useUserFriendsStore } from "src/stores/user-friends";
import FriendCard from "src/components/FriendCard.vue";

export default {
  components: { FriendCard },

  setup() {
    const userFriendsList = useUserFriendsStore();

    return {
      userFriendsList,
    };
  },
};
</script>

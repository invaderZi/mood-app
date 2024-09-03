<template>
  <FriendCard
    v-for="user in friendsMoodUpdateList"
    :key="user.id"
    :user="user"
  />
</template>

<script>
import { useUserFriendsStore } from "src/stores/user-friends";
import FriendCard from "src/components/FriendCard.vue";
import { ref, onMounted } from "vue";
import { getFriendsMoods } from "src/services/FriendsService";

export default {
  components: { FriendCard },
  setup() {
    const userFriendsList = useUserFriendsStore();
    const friendsMoodUpdateList = ref([]);

    const fetchFriends = async () => {
      try {
        const friends = await getFriendsMoods();
        friendsMoodUpdateList.value = friends;
        userFriendsList.setFriendsMoodUpdateList(friends);
      } catch (error) {
        console.error("Erro ao buscar amigos da API:", error);
      }
    };

    onMounted(fetchFriends);

    return {
      userFriendsList, // Adicionado esta linha
      friendsMoodUpdateList,
    };
  },
};
</script>

<template>
  <FriendCard
    :username="user.name"
    :text="userMood.observation"
    :moodPropreties="displayFields"
  />
</template>

<script>
import { useUserMoodStore } from "src/stores/user-mood";
import { useUserStore } from "src/stores/user";
import { computed } from "vue";
import FriendCard from "src/components/FriendCard.vue";

export default {
  components: { FriendCard },

  setup() {
    const userMood = useUserMoodStore();
    const user = useUserStore();

    const displayFields = computed(() => ({
      mood: userMood.mood,
      hunger: userMood.hunger,
      boredom: userMood.boredom,
      physicalDisposition: userMood.physicalDisposition,
      emotionalDisposition: userMood.emotionalDisposition,
      willingnessToTalk: userMood.willingnessToTalk,
      willingnessToListen: userMood.willingnessToListen,
      beAlone: userMood.beAlone,
    }));

    return {
      userMood,
      displayFields,
      user,
    };
  },
};
</script>

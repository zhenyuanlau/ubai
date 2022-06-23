<template>
  <n-data-table
    remote
    ref="table"
    :columns="columns"
    :data="events"
    :loading="loading"
    :row-key="rowKey"
  />
</template>

<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { computed, reactive, ref } from "vue";

const variables = reactive({
  matching: "working",
});

const { result, loading, error, refetch } = useQuery(
  gql`
    query getEvents($matching: String) {
      events(matching: $matching) {
        id
        event
        userId
      }
    }
  `,
  variables
);

const events = computed(() => result.value?.events ?? []);

const columns = ref([
  {
    title: "EventID",
    key: "id",
  },
  {
    title: "UserId",
    key: "userId",
  },
  {
    title: "Event",
    key: "event",
  },
]);

function rowKey(rowData) {
  return rowData.column1;
}
</script>

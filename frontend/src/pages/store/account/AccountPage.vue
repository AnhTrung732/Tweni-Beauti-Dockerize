<template lang="">
  <Wrapper>
    <div class="content">
      <div class="left-column">
        <div class="header">
          <ul class="breadcrumb">
            <li><router-link to="/">Trang chủ</router-link></li>
            <li>Tài khoản</li>
          </ul>
        </div>
        <div class="sidebar-heading">
          <SavePointCard></SavePointCard>
        </div>

        <div class="sidebar-account">
          <p v-for="(item, index) in routeLinks">
            <li>
              <router-link
                :to="item.path"
                :ref="item.path"
                :class="{ active: this.$route.path === item.path }"
              >
                {{ item.title }}
              </router-link>
            </li>
          </p>
        </div>
      </div>
      <div class="right-column shadow-2">
        <router-view></router-view>
      </div>
    </div>
  </Wrapper>
</template>
<script>
import Wrapper from "../../Wrapper.vue";
import SavePointCard from "./components/SavePointCard.vue";
import { useInfoAccountStorePinia } from "@/stores/store/infoAccount.js";
import { mapActions } from "pinia";
export default {
  components: {
    Wrapper,
    SavePointCard,
  },
  data() {
    return {
      routeLinks: [
        {
          title: "Tài khoản",
          path: "/account/profile",
        },
        {
          title: "Đơn hàng",
          path: "/account/orders",
        },
        {
          title: "Địa chỉ giao nhận",
          path: "/account/address",
        },
        {
          title: "Ưu đãi của tôi",
          path: "/account/my-promotions",
        },
      ],
    };
  },
  mounted() {
    this.loadDefaultInfoCus();
  },
  methods: {
    ...mapActions(useInfoAccountStorePinia, [
      "loadDefaultInfoCus",
      "updatedInfoCus",
    ]),
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixin";

.content {
  width: 100%;
  min-height: 100vh;

  .left-column {
    width: 30%;
    height: 100%;
    float: left;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    //border-right: 1px solid gray;
    @include mobile {
      width: 100%;
      display: flex;
      flex-direction: column;
      //border-right: none;
    }
    @include mini-tablet {
      width: 100%;
      display: flex;
      flex-direction: column;
      //border-right: none;
    }
    @include tablet {
      width: 100%;
      display: flex;
      flex-direction: column;
      //border-right: none;
    }

    ul.breadcrumb {
      padding: 10px 16px;
      list-style: none;
    }

    /* Display list items side by side */
    ul.breadcrumb li {
      display: inline;
    }
    /* Add a slash symbol (/) before/behind each list item */
    ul.breadcrumb li + li:before {
      padding: 8px;
      color: #797979;
      content: ">\00a0";
    }

    /* Add a color to all links inside the list */
    ul.breadcrumb li a {
      color: #797979;
      text-decoration: none;
    }

    /* Add a color on mouse-over */
    ul.breadcrumb li a:hover {
      color: #797979;
      font-weight: 600;
      text-decoration: underline;
    }

    .sidebar-account {
      font-size: 16px;

      &::-webkit-scrollbar {
        display: none;
      }

      @include mobile {
        text-align: center;
        max-width: 100%;
        display: flex;
        flex-direction: row;
        white-space: nowrap;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none;
        // border-bottom: 1px solid rgba(198, 197, 197, 0.5);
        //border-right: 1px solid rgba(198, 197, 197, 0.5);
        margin-bottom: 10px;
        overflow: scroll;
      }
      @include mini-tablet {
        text-align: center;
        font-size: 18px;
        max-width: 100%;
        display: flex;
        flex-direction: row;
        white-space: nowrap;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none;
        border-bottom: 1px solid rgba(198, 197, 197, 0.5);
        //border-right: 1px solid rgba(198, 197, 197, 0.5);
        margin-bottom: 10px;
        overflow: scroll;
      }
      @include tablet {
        text-align: center;
        font-size: 18px;
        max-width: 100%;
        display: flex;
        flex-direction: row;
        white-space: nowrap;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none;
        border-bottom: 1px solid rgba(198, 197, 197, 0.5);
        //border-right: 1px solid rgba(198, 197, 197, 0.5);
        margin-bottom: 10px;
        overflow: scroll;
      }
    }

    .sidebar-account li a {
      padding: 14px;
      text-decoration: none;
      color: #333;
      h4 {
        margin-bottom: 20px;
      }
    }
    .sidebar-account a:hover {
      text-decoration: underline;
      color: #aed56b;
    }
    .sidebar-account a:focus,
    .active {
      color: var(--primary-color) !important;

      font-weight: 600;
      text-decoration: none;
    }
  }
}
</style>
>

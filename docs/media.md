---
layout: doc
title: Médias

---    
<script setup>
import media from "./data/medias.json";

</script>

<div class="article" v-for="item in media" v-if="media.length">
    <a class="title" target="_blank" v-bind:href="item.url"> {{ item.titre }} </a>
    <hr />
    <div class="article-info">
        <span> Date : {{ new Date(item.date).toLocaleDateString() }}</span>
        <span> Catégorie : {{ item.type }}</span>
    </div>
</div>

<style lang="scss">

.article {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto 1.25rem;
  padding: 1rem 1.25rem;
  border-radius: 0.4rem;
  text-align: left;
  @media (max-width: 419px) {
    border-radius: 0;
  }
  .title {
    position: relative;
    display: inline-block;
    font-size: 1.28rem;
    line-height: 2rem;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--c-brand);
      visibility: hidden;
      transition: transform 0.3s ease-in-out;
      transform: scaleX(0);
    }
    &:hover {
      cursor: pointer;
      &::after {
        visibility: visible;
        transform: scaleX(1);
      }
    }
    a {
      color: inherit;
    }
  }
  .article-info {
    display: flex;
    font-size: 0.9rem;
    flex-shrink: 0;
    > span {
      margin-right: 0.5em;
      line-height: 1.8;
    }
  }
}
</style>

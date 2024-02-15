---
layout: doc
title: Articles
---

<script setup>
  // Récupération des données du thème définies dans config.js
  import { useData } from 'vitepress'
  const { theme } = useData();
  import { data as posts } from './posts.data'

</script>

<div class="article" v-for="{ title, url, date, excerpt, category, tag, archive } of posts" v-if="posts.length">
    <div v-if="!archive">  
        <a class="title" v-bind:href="url"> {{ title }} </a>
        <hr />
        <div class="article-info">
            <span v-if="date">Date : {{ date.string }}</span>
           <span v-if="category"> Catégorie : {{ category[0] }}</span>
          <span v-if="tag"> Tag : {{ tag[0] }}</span>
        </div>
    </div>   
</div>

<style scoped lang="scss">

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

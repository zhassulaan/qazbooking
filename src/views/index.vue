<template>
  <div class='home'>
    <div class='main'>
      <img
        src='@/assets/images/home1.jpeg'
        alt='home image'
        class='main-image'
      />
      <div class='main-content'>
        <h1 class='main-content__title'>Лучшие места для вашего отдыха</h1>
        <h4 class='main-content__text'>Поиск предложений на отели, дома и многое другое…</h4>
        <Search />
      </div>
    </div>

    <div class='category'>
      <h3>Категории</h3>
      <div class='category-content'>
        <Category
          v-for='category in categories'
          :key='category.text'
          :info='category'
        />
      </div>
    </div>

    <div class='popular'>
      <h3>Популярные места</h3>
      <div class='popular-content'>
        <div>
          <div class='popular-content__header'>
            <h5 class='popular-content__header-title'>Хостелы</h5>
            <div class='icon'>
              <Arrow />
            </div>
          </div>
          <div class='popular-content__body'>
            <Card
              v-for='(hostel, index) in hostels'
              :key='index'
              :info='hostel'
            />
          </div>
        </div>

        <div>
          <div class='popular-content__header'>
            <h5 class='popular-content__header-title'>Туры</h5>
            <div class='icon'>
              <Arrow />
            </div>
          </div>
          <div class='popular-content__body'>
            <Card
              v-for='(tour, index) in tours'
              :key='index'
              :info='tour'
            />
          </div>
        </div>

        <div>
          <div class='popular-content__header'>
            <h5 class='popular-content__header-title'>Базы отдыха</h5>
            <div class='icon'>
              <Arrow />
            </div>
          </div>
          <div class='popular-content__body'>
            <Card
              v-for='(recreation_center, index) in recreation_centers'
              :key='index'
              :info='recreation_center'
            />
          </div>
        </div>

        <div>
          <div class='popular-content__header'>
            <h5 class='popular-content__header-title'>Досуг/Развлечения</h5>
            <div class='icon'>
              <Arrow />
            </div>
          </div>
          <div class='popular-content__body'>
            <Card
              v-for='(leisure_entertainment, index) in leisure_entertainments'
              :key='index'
              :info='leisure_entertainment'
            />
          </div>
        </div>
      </div>
    </div>

    <div class='review'>
      <div class='review-header'>
        <h3>Отзывы гостей</h3>
        <div class='review-header__icons'>
          <div class='icon'>
            <Arrow />
          </div>
          <div class='icon'>
            <Arrow />
          </div>
        </div>
      </div>
      <div class='review-content'>
        <Review
          v-for='(review, index) in reviews'
          :key='index'
          :info='review'
        />
      </div>
    </div>

    <div class='adventure'>
      <h6 class='adventure-subtitle'>Тур по Казахстану</h6>
      <h3 class='adventure-title'>Откройте Новые Грани Путешествий</h3>
      <h6 class='adventure-content'>Погрузитесь в удивительный мир путешествий с турами по Казахстану от QazBooking! Наша компания предлагает вам уникальную возможность открыть для себя неизведанные уголки этой невероятной страны. Отдых в Казахстане с нами — это не только возможность отдохнуть, но и увидеть самые захватывающие места, окунуться в богатую культуру и насладиться гостеприимством этой удивительной страны.</h6>
      <div class='adventure-content'>
        <Box
          v-for='(item, index) in about'
          :key='index'
          :info='item'
        />
      </div>
    </div>

    <div class='blogs'>
      <div class='blogs-header'>
        <h3>Интересное</h3>
        <div class='blogs-header__button btn' @click="router.push('/interesting')">
          <h6>Читать все</h6>
          <Arrow />
        </div>
      </div>
      <div class='blogs-content'>
        <Blog
          v-for='(blog,index) in blogs'
          :key='index'
          :info='blog'
        />
      </div>
    </div>

    <div class='about'>
      <div class='about-content'>
        <h3 class='about-content__title'>Qazbooking.kz</h3>
        <p class='about-content__text'>Это сервис онлайн бронирования хостелов и баз отдыха. С его помощью можно легко и удобно запланировать своё путешествие в пару кликов. Не придётся много раз звонить, если линии заняты, или долго ожидать ответа в WhatsApp. Бронирование проходит в онлайн режиме.</p>
        <p class='about-content__text'>На Qazbooking.kz собрано большое количество хостелов Алматы, Астаны, Актау, Караганды, Талгара, Уральска и других городов Казахстан</p>
      </div>
      <img
        src='@/assets/images/home2.jpeg'
        alt='home image'
        class='about-image'
      />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Search from '@/components/Search.vue';
import Category from '@/components/Category.vue';
import Card from '@/components/Card.vue';
import Review from '@/components/Review.vue';
import Box from '@/components/Box.vue';
import Blog from '@/components/Blog.vue';
import Arrow from '@/components/icons/Arrow.vue';
import { categories, hostels, tours, recreation_centers, leisure_entertainments, reviews, about, blogs } from '@/assets/data';

const router = useRouter();
</script>

import PageTitle from '../components/title/Title.vue';

export default {
  component: PageTitle,
  title: 'Components/Title',
};

export const Primary = () => ({
  components: { PageTitle },
  template: '<page-title primary msg="FIND YOUR MOVIE" />',
});
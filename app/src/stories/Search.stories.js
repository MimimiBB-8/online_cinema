import Search from '../components/input/Search.vue';

export default {
  component: Search,
  title: 'Components/Search',
};

export const Primary = () => ({
  components: { Search },
  template: '<search primary msg="FIND YOUR MOVIE" />',
});
import avatar from './avatar.vue'

export default {
  title: 'avatar',
  component: { avatar }
}

const template = () => ({
  components: { avatar },
  template: `
      <avatar username='React.reposit' avatar="https://i.picsum.photos/id/852/200/300.jpg?hmac=6IMZOkPF_q5nf8IwfYdfxPUyKnyPL1w8moDjTeMOT5g"></avatar>
    `
})

export const Default = template.bind({})

import store from '@/store';

export const isAdmin = () => {
  const uc = store.state.userCharacter
  // console.log(uc);
  // return JSON.parse(localStorage.getItem('CHARACTER')).name ==='admin' || uc ==='admin'
  // return localStorage.getItem('CHARACTER')?.includes( 'admin') || uc === 'admin';
  return uc.name==='admin'
}


export const getCharacterInfoById = (id) => {
  const { characterInfo } = store.state;

  const one = characterInfo.find((item) => {
    return item._id === id;
  });
  // localStorage.setItem('CHARACTER',JSON.stringify(one))
  return (
    one || {
      title: '未知角色',
    }
  );
};

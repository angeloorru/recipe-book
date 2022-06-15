import axios from 'axios';

export const deleteRecipe = (id: number) => {
  axios.delete(`${process.env.REACT_APP_DELETE_RECIPE}/${id}`).then(() => {
  });
};

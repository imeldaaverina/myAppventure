import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { getJwt } from '../../../helpers/auth';
import { callAPI } from '../../../helpers/network';
const initialState = {
  post: {},
  loading: false,
};
const slices = createSlice({
  initialState,
  name: 'upload',
  reducers: {
    toggleLoading(state, action) {
      Object.assign(state, {
        ...state,
        loading: action.payload,
      });
    },
    setPost(state, action) {
      Object.assign(state, {
        ...state,
        post: action.payload,
      });
    },
  },
});
const { setPost, toggleLoading } = slices.actions;
export const useUploadDispatcher = () => {
  const { upload } = useSelector((state) => state);
  const dispatch = useDispatch();
  const makeLoading = (loading) => dispatch(toggleLoading(loading));
  const makePost = async (postId) => {
    dispatch(toggleLoading(true));
    const response = await callAPI({
      url: `/post/${postId}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${getJwt()}`,
      },
    });
    const {
      data: { attributes },
    } = response.data;
    localStorage.setItem('text');
    dispatch(setPost(attributes));
    dispatch(toggleLoading(false));
  };
  return {
    upload,
    makePost,
    makeLoading,
  };
};
export default slices.reducer;

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  blogs: [],
  blog: {},
  isLoading: true,
  error: ''
}

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    //actions
    get_blogs: function(state, action){
        return { 
            ...state, 
            blogs: action.payload,
            isLoading: false,
            error: ''
         }
    },
    get_blog: function(state, action){
        return { 
            ...state, 
            blog: action.payload,
            isLoading: false,
            error: ''
         };
    },
    create: function(state, action){
        console.log(action)
        return { ...state, blogs: [...state.blogs, action.payload] };
    },
    delete_blog: function(state, action){
        console.log(action.payload);
        return { ...state, blogs: state.blogs.filter(blog => blog.id != action.payload) };
    },
    isError: function(state, action) {
        console.log(action)
        return { ...state, error: action.payload, isLoading: false }
    }
  },
})

// Action creators are generated for each case reducer function
export const { get_blogs, create, delete_blog, isError,get_blog } = blogSlice.actions

export default blogSlice.reducer
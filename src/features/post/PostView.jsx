import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsFetch } from './postSlice';

export const PostView = () => {
  const post = useSelector((state) => state.post);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostsFetch());
  }, [dispatch]);

  return (
    <div>
      <h2>List of Posts</h2>
      {post.loading && <div>Loading...</div>}
      {!post.loading && post.posts.length ? (
        <ul>
          {post.posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

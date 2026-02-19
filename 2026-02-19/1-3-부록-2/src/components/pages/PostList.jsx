import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${theme.spacing.lg};

  h2 {
    position: relative;
    font-size: 1.8rem;
    position: relative;
    right: 10px;
    color: ${theme.colors.textPrimary};
    text-align: center;
    padding-bottom: ${theme.spacing.xs};

    &::after {
      content: "";
      position: absolute;
      top: 46px;
      right: -10px;
      left: 10px;
      height: 2px;
      background-color: rgba(255, 255, 255, 0.08);
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.sm};
    list-style: square;
  }

  li {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: ${theme.borderRadius.md};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    a {
      display: flex;
      align-items: center;
      padding: ${theme.spacing.md} ${theme.spacing.lg};
      color: ${theme.colors.textPrimary};
      font-weight: 500;
      font-size: 1.05rem;

      span {
        color: ${theme.colors.indigo};
        font-weight: 700;
        margin-right: 12px;
      }
    }

    &:hover {
      background: rgba(255, 255, 255, 0.08);
      border-color: ${theme.colors.indigo};
      box-shadow: 0 0 0 2px rgba(100, 108, 255, 0.2);
      transform: translateX(6px);
    }
  }

  .back-link {
    align-self: flex-start;
    color: ${theme.colors.textSecondary};
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.2s ease;
    align-self: center;

    &:hover {
      color: ${theme.colors.indigo};
    }
  }
`;

export default function PostList({ posts }) {
  return (
    <ListContainer>
      <h2>✏️ 글 목록</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>
              {post.id}. {post.title}
            </Link>
          </li>
        ))}
      </ul>

      <Link to="/" className="back-link">
        ← 홈으로
      </Link>
    </ListContainer>
  );
}

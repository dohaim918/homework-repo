import { useNavigate, useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${theme.spacing.md};

  .meta {
    color: ${theme.colors.indigo};
    background: rgba(0, 0, 0, 0.2);
    font-size: 0.8rem;
    font-weight: 500;
    text-transform: uppercase;
    align-self: flex-start;
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    border: 1px solid ${theme.colors.glassBorder};
    border-radius: ${theme.borderRadius.md};
    color: ${theme.colors.textSecondary};
  }

  h2 {
    font-size: 2rem;
    color: ${theme.colors.textPrimary};
    margin-top: ${theme.spacing.xs};
  }

  .content {
    border-radius: ${theme.borderRadius.md};
    color: ${theme.colors.textSecondary};
    margin-bottom: ${theme.spacing.md};
  }

  .back-btn {
    padding: ${theme.spacing.sm} ${theme.spacing.lg};
    background: ${theme.colors.indigo};
    color: white;
    border: none;
    border-radius: ${theme.borderRadius.md};
    font-weight: 600;
    transition: all 0.2s ease;
    text-decoration: none;
    display: inline-block;

    &:hover {
      background: ${theme.colors.indigoLight};
      box-shadow: ${theme.shadows.signature};
      transform: translateY(-2px);
    }

    &:active {
      transform: scale(0.95);
    }
  }
`;
export default function PostDetail({ posts }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find((p) => p.id == id);
  return (
    <DetailContainer>
      <p className="meta">Post ID : {post.id}</p>
      <h2>{post.title}</h2>
      <div className="content">{post.content}</div>
      <button className="back-btn" onClick={() => navigate(-1)}>
        &lt; 목록으로 돌아가기
      </button>
    </DetailContainer>
  );
}

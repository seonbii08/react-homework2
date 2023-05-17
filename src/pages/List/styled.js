import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 300px;
  height: 100vh;
  margin: 0 auto;
  padding: 16px;
`;

export const ListBox = styled.ul`
  width: 100%;
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  padding: 4px 0;
`;

export const Desc = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonBox = styled.div`
  display: flex;
`;

export const Button = styled.button`
    flex-grow: 1;
    flex-shrink: 0;
    padding: 6px 14px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    margin-left: 6px;
    &:hover {
      background: #d6d6d6;
    }
    &:disabled {
      cursor: not-allowed;
    }
    &:disabled:hover {
      background: rgba(239, 239, 239, 0.3);
    }
    }
`;

import * as S from "./styled";

import { memberList } from "../../constants/member-list";
import { useState } from "react";

function List() {
  const [list, setList] = useState(memberList);

  const sortAscById = () => {
    setList((prevState) => {
      return [...prevState].sort((a, b) => a.id - b.id);
    });
  };

  const sortDescById = () => {
    setList((prevState) => {
      return [...prevState].sort((a, b) => b.id - a.id);
    });
  };

  const sortAscByName = () => {
    setList((prevState) => {
      return [...prevState].sort((a, b) => (b.name < a.name ? 1 : -1));
    });
  };

  const sortDescByName = () => {
    setList((prevState) => {
      return [...prevState].sort((a, b) => (a.name < b.name ? 1 : -1));
    });
  };

  const sortAscByLevel = () => {
    setList((prevState) => {
      // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sort((a, b) => {
      //   // 7, undefined
      //   // undifined, 9
      //   // a: 앞의 값
      //   // b: 뒤의 값
      //   // a = 1, b = 2;
      //   // a - b = -1 // 뒤에꺼를 뒤로
      //   // b - a = 1 // 뒤에꺼를 앞으로
      //   // a - b, b - a = 0 // 그냥 냅둔다.
      //   // 1 - undefined // 위랑 같음
      // });

      return [...prevState].sort((a, b) => {
        if (a.level === b.level) return 0;
        if (!a.level) return -1;
        return a.level < b.level ? 1 : -1;
      });
    });
  };

  return (
    <S.Container>
      <S.ButtonBox>
        <S.Button onClick={sortAscById}>id정렬</S.Button>
        <S.Button onClick={sortDescById}>id내림차정렬</S.Button>
        <S.Button onClick={sortAscByName}>name정렬</S.Button>
        <S.Button onClick={sortDescByName}>name내림차정렬</S.Button>
        <S.Button onClick={sortAscByLevel}>level정렬</S.Button>
      </S.ButtonBox>
      <S.ListItem>
        <S.Desc>id</S.Desc>
        <S.Desc>name</S.Desc>
        <S.Desc>level</S.Desc>
      </S.ListItem>
      {list.map(({ id, name, level }) => {
        return (
          <S.ListItem key={id}>
            <S.Desc>{id}</S.Desc>
            <S.Desc>{name}</S.Desc>
            <S.Desc>{level || "없음"}</S.Desc>
          </S.ListItem>
        );
      })}
    </S.Container>
  );
}

export default List;

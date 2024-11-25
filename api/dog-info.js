export default function handler(req, res) {
  const dogData = {
    "0-1개월": {
      img: "https://your-cdn.com/img_dog_web_1.png",
      title: "0-1개월 (신생아기)",
      description: `
        <p>신생아 강아지에게는 모든 것이 새롭고, 어미에게 의존할 수밖에 없는 시기예요. 눈을 뜨지 못하고 스스로 체온을 조절하지 못하기 때문에 따뜻한 환경을 만들어주는 것이 중요해요. 
        분유로 영양을 보충해주면서 배변 유도도 도와줘야 한답니다.</p>
        <p>저체온증이 오지 않게 체온을 유지해주고, 저혈당과 탈수를 예방하기 위해 영양 공급을 충분히 해주는 게 중요해요.
        출생 직후, 병원에 방문해서 어미와 강아지의 건강 상태를 점검해주세요.</p>
      `,
    },
    "1-2개월": {
      img: "https://your-cdn.com/img_dog_web_1.png",
      title: "1-2개월 (사회화 시기)",
      description:
        "눈을 뜨고 걸음마를 시작하며, 사회화가 시작되는 단계입니다. 생후 45일부터 면역력이 떨어지므로 활동에 주의해주세요.",
    },
    // 다른 탭 데이터 추가 가능
  };

  const { id } = req.query;

  if (dogData[id]) {
    res.status(200).json(dogData[id]);
  } else {
    res.status(404).json({ error: "데이터를 찾을 수 없습니다." });
  }
}

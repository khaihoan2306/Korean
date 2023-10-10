export const bai05 = {
  grammar: [
    {
      content:
        "Số từ là từ dùng để đếm số hoặc biểu thị số lượng. Trong tiếng Hàn, có hai loại số từ là số từ thuần Hàn và số từ Hán Hàn. Với số lớn hơn 100, dùng số từ Hán Hàn.(*)",
      kTitle: "고유어 수사",
      vTitle: "Số từ thuần Hàn",
      example: [],
    },
    {
      content:
        "Số từ bổ nghĩa cho danh từ đơn vị đứng sau gọi là 'định từ số'. Trong tiếng Hàn, tuỳ vào danh từ đơn vị mà có thể dùng số Hán Hàn hay số thuần Hàn. Nhưng cũng không có một quy tắc rõ ràng.\n(1) 시간의 '시' giờ\nDùng số từ thuần Hàn để chỉ giờ.\n(2) 시간의 '분' phút\nDùng số Hàn Hán để thể hiện 'phút'.",
      kTitle: "수 관형사",
      vTitle: "Định từ số",
      example: [
        { korean: "A: 지금 몇 시입니까?", vietnamese: "A: Bây giờ là mấy giờ?" },
        { korean: "B: 열두 시입니다.", vietnamese: "B: 12 giờ." },
        { korean: "", vietnamese: "" },
        { korean: "A: 지금 몇 시입니까?", vietnamese: "A: Bây giờ là mấy giờ?" },
        { korean: "B: 오후 세 시 사십오 분입니다.", vietnamese: "B: 3 giờ 40 phút chiều." },
      ],
    },
    {
      content:
        "Là đuôi câu, được dùng kết hợp vào sau thân động từ hoặc tính từ để nói lên suy nghĩ của người nói, thông báo một sự thật hoặc cũng có thể dùng trong câu một cách thân mật. Đối với cách nói trân trọng, hoặc mang tính chính thức, được thay thế bằng đuôi câu -ㅂ습니다, -ㅂ습니까.Trong trường hợp là câu hỏi thì được đọc lên giọng ở cuối câu.\nNhững động từ hoặc tính từ kết thúc bằng ㅏ, ㅗ thì dùng với -아요, còn những động từ hoặc tính từ không kết thúc bằng ㅏ, ㅗ thì dùng với -어요. Đối với động từ có đuôi 하다 thì 하다 được chuyển thành 해요.",
      kTitle: "-아/어요",
      vTitle: "",
      example: [
        { korean: "A: 지금 무엇울 해요?", vietnamese: "A: Bây giờ làm gì?" },
        { korean: "B: 학교에서 공부해요.", vietnamese: "B: Học ở trường." },
      ],
    },
    {
      content:
        "Trong trường hợp những động từ hoặc tính từ có nguyên âm trùng với nguyên âm phía sau có thể lược bỏ nguyên âm trùng, còn những động từ hoặc tính từ kết thúc bằng các nguyên âm khác thì có thể thu gọn lại.",
      kTitle: "",
      vTitle: "",
      example: [
        { korean: "가다 -> 가아요 -> 가요", vietnamese: "" },
        { korean: "보다 -> 보아요 -> 봐요", vietnamese: "" },
        { korean: "마시다 -> 마시어요 -> 마셔요", vietnamese: "" },
      ],
    },
    {
      content:
        "*<Tham khảo> trong trường hợp kết hợp với danh từ thì dùng -입니다/-입나까 cho câu trân trọng, dùng -이에요/-예요 cho câu thân mật.",
      kTitle: "",
      vTitle: "",
      example: [
        {
          korean: "선생님입니다./입니까? -> 선생님이에요./이에요?",
          vietnamese: "Là thầy giáo (phải không?)",
        },
        { korean: "의사입니다./입니까? -> 의사예요./예요?", vietnamese: "Là bác sĩ (phải không?)" },
      ],
    },
    {
      content: "에 ở trong 에 가다 dùng để chỉ hướng đi, còn được dùng với 가다/오다/다니다.",
      kTitle: "에 가다",
      vTitle: "Đi đến",
      example: [
        { korean: "지금 학교에 가요.", vietnamese: "Bây giờ (tôi) đi đến trường." },
        {
          korean: "저는 한국대학교에 다녀요.",
          vietnamese: "Tôi đang đi học ở trường Đại học Hàn Quốc.",
        },
      ],
    },
    {
      content:
        "Đặt trước động từ hoặc tính từ để chỉ nghĩa phủ định. Trong trường hợp động từ hoặc tính từ có dạng 'danh từ + 하다' thì 안 được đặt sau danh từ và trước 하다.",
      kTitle: "안",
      vTitle: "không",
      example: [
        { korean: "지금 학교에 안 가요.", vietnamese: "Bây giờ tôi không đến trường." },
        { korean: "동생이 사과룰 안 먹어요", vietnamese: "Em (của tôi) không ăn táo." },
      ],
    },
  ],
  practice: [
    { korean: "아침 6시에 일어납니다.", vietnamese: "Tôi thức dậy lúc 6 giờ." },
    { korean: "8시 반에 회사에 출근합니다.", vietnamese: "Tôi đến công ty lúc 8 giờ." },
    { korean: "10시에 회의실에서 회의를 합니다.", vietnamese: "Tôi họp lúc 10 giờ." },
    { korean: "오후 7시에 저녁을 먹습니다.", vietnamese: "Tôi ăn tối lúc 7 giờ." },
  ],
}

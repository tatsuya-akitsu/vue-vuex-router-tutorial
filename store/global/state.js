export default {
  serviceName: 'Priest',
  labels: {
    navi: {
      navi: [
        { title: '一覧' },
        { title: '本日の予定' },
      ],
      buttons: {
        post: 'TODOを登録する',
      },
    },
    pages: {
      home: 'TODOリスト',
      add: 'TODO新規登録',
      detail: 'TODO詳細',
      edit: 'TODO編集',
    },
    buttons: {
      post: 'TODOを登録する',
      edit: 'TODOを編集する',
      remove: 'TODOを削除する',
    },
    todo: {
      labels: {
        title: 'タイトル',
        date: '日時',
        comment: 'コメント',
        priority: '優先度',
      },
      placeholders: {
        title: 'タイトルを入力してください',
        comments: 'TODOの備考を入力してください',
      },
      priorities: [
        { label: '高', value: 'high' },
        { label: '中', value: 'middle' },
        { label: '低', value: 'low' },
      ],
    },
  },
  todo: {
    isNotFound: false,
    notFoundMessage: '予定がありません',
    data: [],
    body: {},
    todo: {
      title: '',
      date: '',
      comment: '',
      priority: {},
    },
  },
};

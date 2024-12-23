# React + TypeScript + Vite

## Main branch is base stack
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [BiomeJS](https://biomejs.dev/)
- [Commitlint](https://commitlint.js.org/)
- [Lefthook](https://github.com/evilmartians/lefthook)
- [Pnpm](https://pnpm.io/)

## Folder structure

```
src
├── assets            # Chứa các tài nguyên tĩnh như hình ảnh, font chữ, v.v.
├── features
│   ├── feature-name  # Đây là một thư mục tính năng
│   │   ├── components    # Thư mục này chứa tất cả các component dùng chung trong tính năng
│   │   ├── views         # Thư mục này chứa tất cả các view (trang) được sử dụng trong tính năng
│   │   │   ├── View1.ts  # Đây là một view
│   │   │   ├── View2.ts  # Đây là một view
│   │   │   ├── view-large    # Thư mục này chứa tất cả các view có quy mô lớn hơn được sử dụng trong view
│   │   │   │   ├── components    # Thư mục tùy chọn cho các component nhỏ hoặc phổ biến
│   │   │   │   ├── LargeView1.ts # Đây là một view lớn
│   │   │   │   ├── LargeView2.ts # Đây là một view lớn
│   │   │   │   └── index.ts      # Export tất cả các view lớn
│   │   │   └── index.ts      # Export tất cả các view
│   │   ├── hooks         # Thư mục tùy chọn cho các hook
│   │   ├── types         # Thư mục tùy chọn cho các kiểu dữ liệu
│   │   ├── utils         # Thư mục tùy chọn cho các tiện ích
│   │   ├── constants.ts  # File tùy chọn cho các hằng số
│   │   └── ... <-- một số thư mục khác cần thiết cho tính năng như services, store, v.v.
│   │   └── index.ts      # Export tất cả các component, view, hook, type, util hoặc chỉ export view
│   ├── feature-name2 # Đây là một thư mục tính năng khác
│   ├── feature-name3 # Đây là một thư mục tính năng khác
│   └── index.ts      # Export tất cả các tính năng
├── libs              # Chứa các thư viện và tiện ích dùng chung cho toàn ứng dụng
│   ├── config        # Cấu hình chung cho ứng dụng
│   ├── hooks         # Các hook dùng chung
│   ├── providers     # Các provider cho context hoặc state management
│   ├── schema        # Các schema định nghĩa cấu trúc dữ liệu
│   ├── types         # Các kiểu dữ liệu dùng chung
│   └── utils         # Các hàm tiện ích dùng chung
├── router            # Cấu hình và quản lý routing cho ứng dụng
├── stores            # Quản lý state toàn cục (nếu sử dụng)
├── test              # Chứa các file test
├── App.tsx           # Component gốc của ứng dụng
├── main.tsx          # Điểm khởi đầu của ứng dụng
└── vite-env.d.ts     # Khai báo kiểu cho môi trường Vite
```

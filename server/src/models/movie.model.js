import mongoose from "mongoose";
import modelOptions from "./model.options.js";
// https://www.youtube.com/watch?v=iO1flaxFJlM&t=6s
const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    description: "Tên của bộ phim"
  },
  avatar: {
    type: String,
    required: true,
    description: "Đường dẫn đến hình ảnh avatar của bộ phim"
  },
  totalEpisodes: {
    type: Number,
    required: true,
    description: "Tổng số tập của bộ phim"
  },
  episodes: [{
    episodeNumber: {
      type: Number,
      required: true,
      description: "Số thứ tự của tập phim"
    },
    episodeLink: {
      type: String,
      required: true,
      description: "Đường dẫn đến tập phim"
    }
  }],
  duration: {
    type: Number,
    required: true,
    description: "Thời lượng của bộ phim tính bằng phút"
  },
  nameEnglish: {
    type: String,
    required: true,
    description: "Tên tiếng anh của bộ phim"
  },
  trailerTitle: {
    type: String,
    required: true,
    description: "Tiêu đề của trailer"
  },
  trailerLink: {
    type: String,
    required: true,
    description: "Đường dẫn đến trailer của bộ phim"
  },
  description: {
    type: String,
    required: true,
    description: "Mô tả chi tiết về nội dung của bộ phim"
  },
  tags: {
    type: String,
    required: true,
    description: "Các từ khóa tìm kiếm liên quan đến bộ phim (Các từ khóa cách nhau = dấu phẩy VD:A,B)"
  },
  status: {
    type: String,
    required: true,
    description: "Trạng thái hiện tại của bộ phim (ví dụ: Tập 14)"
  },
  quality: {
    type: String,
    required: true,
    description: "Chất lượng của bộ phim (ví dụ: HD)"
  },
  subtitle: {
    type: String,
    required: true,
    description: "Phụ đề của bộ phim (ví dụ: Vietsub)"
  },
  category: {
    type: String,
    required: true,
    description: "Danh mục ( Phim lẻ | Phim bộ | Phim Hoạt hình | Phim mới | Phim chiếu rạp | Phim thuyết minh",
  },
  format: {
    type: String,
    required: true,
    description: "Định dạng phim lẻ | phim bộ",
  },
  country: {
    type: String,
    required: true,
    description: "Quốc gia sản xuất bộ phim"
  },
  genre: [{
    type: String,
    required: true,
    description: "Các thể loại của bộ phim"
  }],
  year: {
    type: String,
    description: "Năm phát hành của bộ phim"
  },
  director: {
    type: String,
    required: true,
    description: "Đạo diễn của bộ phim"
  },
  cast: {
    type: String,
    required: true,
    description: "Danh sách diễn viên tham gia bộ phim (Các từ khóa cách nhau = dấu phẩy VD:A,B)"
  },
  rating: {
    type: Number,
    required: true,
    description: "Đánh giá của bộ phim (thang điểm)"
  },
  views: {
    type: Number,
    required: true,
    description: "Lượt xem của bộ phim"
  },
  hot: {
    type: Boolean,
    required: true,
    default: false,
    description: "Phim có hot hay không"
  }
}, modelOptions);

const movieModel = mongoose.model("Movie", movieSchema);

export default movieModel;

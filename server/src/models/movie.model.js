import mongoose from "mongoose";
import modelOptions from "./model.options.js";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    description: "Tên của bộ phim"
  },
  description: {
    type: String,
    required: true,
    description: "Mô tả chi tiết về nội dung của bộ phim"
  },
  releaseDate: {
    type: Date,
    required: true,
    description: "Ngày phát hành của bộ phim"
  },
  genre: [{
    type: String,
    required: true,
    description: "Các thể loại của bộ phim"
  }],
  country: {
    type: String,
    required: true,
    description: "Quốc gia sản xuất bộ phim"
  },
  director: {
    type: String,
    required: true,
    description: "Đạo diễn của bộ phim"
  },
  cast: [{
    type: String,
    required: true,
    description: "Danh sách diễn viên tham gia bộ phim"
  }],
  duration: {
    type: Number,
    required: true,
    description: "Thời lượng của bộ phim tính bằng phút"
  },
  rating: {
    type: Number,
    required: true,
    description: "Đánh giá của bộ phim (thang điểm)"
  },
  poster: {
    type: String,
    required: true,
    description: "Đường dẫn đến hình ảnh poster của bộ phim"
  },
  trailer: {
    title: {
      type: String,
      required: true,
      description: "Tiêu đề của trailer"
    },
    link: {
      type: String,
      required: true,
      description: "Đường dẫn đến trailer của bộ phim"
    }
  },
  keywords: [{
    type: String,
    required: true,
    description: "Các từ khóa tìm kiếm liên quan đến bộ phim"
  }],
  episodes: [{
    episodeNumber: {
      type: Number,
      required: true,
      description: "Số thứ tự của tập phim"
    },
    episodeTitle: {
      type: String,
      required: true,
      description: "Tên của tập phim"
    },
    link: {
      type: String,
      required: true,
      description: "Đường dẫn đến tập phim"
    }
  }],
  status: {
    type: String,
    required: true,
    description: "Trạng thái hiện tại của bộ phim (ví dụ: Tập 14)"
  },
  totalEpisodes: {
    type: Number,
    required: true,
    description: "Tổng số tập của bộ phim"
  },
  quality: {
    type: String,
    required: true,
    description: "Chất lượng của bộ phim (ví dụ: HD)"
  },
  language: {
    type: String,
    required: true,
    description: "Ngôn ngữ của bộ phim (ví dụ: Vietsub)"
  },
  views: {
    type: Number,
    required: true,
    description: "Lượt xem của bộ phim"
  }
}, modelOptions);

const movieModel = mongoose.model("Movie", movieSchema);

export default movieModel;

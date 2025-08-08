const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Product {
    id: ID!
    category: String!
    name: String!
    description: String!
    price: Float!
    image: String!
    images: [String!]!
    details: String!
    stock: Int!
  }
  type Banner {
    id: ID!
    alt: String!
    image: String!
  }
  type BannerProgram {
    id: ID!
    alt: String!
    image: String!
  }
  type Query {
    products: [Product]
    product(id: ID!): Product
    banners: [Banner]
    bannersPrograms: [BannerProgram]
  }
`;


const resolvers = {
  Query: {
    products: () => products,
    product: (_, { id }) => products.find(p => p.id === id),
    banners: () => banners,
    bannersPrograms: () => bannersPrograms,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Mock GraphQL server ready at ${url}`);
});
const products = [
  {
    id: '1',
    name: 'Sữa bột Meiji số 0',
    description: 'Dành cho bé từ 0-6 tháng tuổi, bổ sung DHA và canxi.',
    category: 'cate01',
    price: 460000,
    image: '/Products/sp-01.webp',
    images: [
      '/Products/sp-01.webp',
      '/Products/sp-01.webp',
      '/Products/sp-01.webp',
    ],
    details: 'Sữa bột Meiji số 0 là sản phẩm dinh dưỡng cao cấp, cung cấp đầy đủ vitamin và khoáng chất cần thiết cho sự phát triển toàn diện của trẻ sơ sinh. Sản phẩm được sản xuất theo công nghệ tiên tiến, đảm bảo an toàn và chất lượng cao nhất cho sức khỏe của bé.',
    stock: 100,
  },
  {
    id: '2',
    name: 'Tã dán Moony size NB',
    description: 'Chất liệu mềm mại, thấm hút tốt, không hăm tã.',
    category: 'cate01',
    price: 320000,
    image: '/Products/sp-02.webp',
    images: [
      '/Products/sp-01.webp',
      '/Products/sp-01.webp',
      '/Products/sp-01.webp',
    ],
    details: 'Sữa bột Meiji số 0 là sản phẩm dinh dưỡng cao cấp, cung cấp đầy đủ vitamin và khoáng chất cần thiết cho sự phát triển toàn diện của trẻ sơ sinh. Sản phẩm được sản xuất theo công nghệ tiên tiến, đảm bảo an toàn và chất lượng cao nhất cho sức khỏe của bé.',
    stock: 100,
  },
  {
    id: '3',
    name: 'Xe đẩy em bé Aprica',
    description: 'Xe đẩy cao cấp, gọn nhẹ, dễ gập gọn và di chuyển.',
    category: 'cate01',
    price: 4900000,
    image: '/Products/sp-03.webp',
    images: [
      '/Products/sp-01.webp',
      '/Products/sp-01.webp',
      '/Products/sp-01.webp',
    ],
    details: 'Sữa bột Meiji số 0 là sản phẩm dinh dưỡng cao cấp, cung cấp đầy đủ vitamin và khoáng chất cần thiết cho sự phát triển toàn diện của trẻ sơ sinh. Sản phẩm được sản xuất theo công nghệ tiên tiến, đảm bảo an toàn và chất lượng cao nhất cho sức khỏe của bé.',
    stock: 100,
  },
  {
    id: '4',
    name: 'Ghế ăn dặm Mastela',
    description: 'Ghế ăn đa năng cho bé từ 6 tháng tuổi trở lên.',
    category: 'cate01',
    price: 1200000,
    image: '/Products/sp-04.webp',
    images: [
      '/Products/sp-01.webp',
      '/Products/sp-01.webp',
      '/Products/sp-01.webp',
    ],
    details: 'Sữa bột Meiji số 0 là sản phẩm dinh dưỡng cao cấp, cung cấp đầy đủ vitamin và khoáng chất cần thiết cho sự phát triển toàn diện của trẻ sơ sinh. Sản phẩm được sản xuất theo công nghệ tiên tiến, đảm bảo an toàn và chất lượng cao nhất cho sức khỏe của bé.',
    stock: 100,
  },
  {
    id: '5',
    name: 'Nước rửa bình sữa Dnee',
    description: 'Chiết xuất từ thiên nhiên, an toàn cho trẻ sơ sinh.',
    category: 'cate01',
    price: 95000,
    image: '/Products/sp-05.webp',
    images: [
      '/Products/sp-01.webp',
      '/Products/sp-01.webp',
      '/Products/sp-01.webp',
    ],
    details: 'Sữa bột Meiji số 0 là sản phẩm dinh dưỡng cao cấp, cung cấp đầy đủ vitamin và khoáng chất cần thiết cho sự phát triển toàn diện của trẻ sơ sinh. Sản phẩm được sản xuất theo công nghệ tiên tiến, đảm bảo an toàn và chất lượng cao nhất cho sức khỏe của bé.',
    stock: 100,
  },
  {
    id: '6',
    name: 'Bình sữa Pigeon cổ rộng 160ml',
    description: 'Chất liệu nhựa PPSU cao cấp, chịu nhiệt tốt.',
    category: 'cate01',
    price: 195000,
    image: '/Products/sp-06.webp',
    images: [
      '/Products/sp-01.webp',
      '/Products/sp-01.webp',
      '/Products/sp-01.webp',
    ],
    details: 'Sữa bột Meiji số 0 là sản phẩm dinh dưỡng cao cấp, cung cấp đầy đủ vitamin và khoáng chất cần thiết cho sự phát triển toàn diện của trẻ sơ sinh. Sản phẩm được sản xuất theo công nghệ tiên tiến, đảm bảo an toàn và chất lượng cao nhất cho sức khỏe của bé.',
    stock: 100,
  },
  {
    id: '7',
    name: 'Kem chống hăm Bepanthen',
    description: 'Bảo vệ và tái tạo da bé, giảm mẩn đỏ và kích ứng.',
    category: 'cate02',
    price: 78000,
    image: '/Products/sp-07.webp',
    images: [
      '/Products/sp-01.webp',
      '/Products/sp-01.webp',
      '/Products/sp-01.webp',
    ],
    details: 'Sữa bột Meiji số 0 là sản phẩm dinh dưỡng cao cấp, cung cấp đầy đủ vitamin và khoáng chất cần thiết cho sự phát triển toàn diện của trẻ sơ sinh. Sản phẩm được sản xuất theo công nghệ tiên tiến, đảm bảo an toàn và chất lượng cao nhất cho sức khỏe của bé.',
    stock: 100,
  },
  {
    id: '8',
    name: 'Sữa tắm gội toàn thân Kodomo',
    description: 'Hương thơm dịu nhẹ, không cay mắt bé.',
    category: 'cate02',
    price: 89000,
    image: '/Products/sp-08.webp',
    images: [
      '/Products/sp-01.webp',
      '/Products/sp-01.webp',
      '/Products/sp-01.webp',
    ],
    details: 'Sữa bột Meiji số 0 là sản phẩm dinh dưỡng cao cấp, cung cấp đầy đủ vitamin và khoáng chất cần thiết cho sự phát triển toàn diện của trẻ sơ sinh. Sản phẩm được sản xuất theo công nghệ tiên tiến, đảm bảo an toàn và chất lượng cao nhất cho sức khỏe của bé.',
    stock: 100,
  },
  {
    id: '9',
    name: 'Địu em bé Ergobaby',
    description: 'Thiết kế công thái học, đỡ lưng và cổ bé tốt.',
    category: 'cate02',
    price: 2300000,
    image: '/Products/sp-09.webp',
    images: [
      '/Products/sp-01.webp',
      '/Products/sp-01.webp',
      '/Products/sp-01.webp',
    ],
    details: 'Sữa bột Meiji số 0 là sản phẩm dinh dưỡng cao cấp, cung cấp đầy đủ vitamin và khoáng chất cần thiết cho sự phát triển toàn diện của trẻ sơ sinh. Sản phẩm được sản xuất theo công nghệ tiên tiến, đảm bảo an toàn và chất lượng cao nhất cho sức khỏe của bé.',
    stock: 100,
  },
  {
    id: '10',
    name: 'Khăn sữa Muslin 6 lớp',
    description: 'Mềm mại, thấm hút tốt, dùng lau mặt và miệng cho bé.',
    category: 'cate03',
    price: 45000,
    image: '/Products/sp-10.webp',
    images: [
      '/Products/sp-01.webp',
      '/Products/sp-01.webp',
      '/Products/sp-01.webp',
    ],
    details: 'Sữa bột Meiji số 0 là sản phẩm dinh dưỡng cao cấp, cung cấp đầy đủ vitamin và khoáng chất cần thiết cho sự phát triển toàn diện của trẻ sơ sinh. Sản phẩm được sản xuất theo công nghệ tiên tiến, đảm bảo an toàn và chất lượng cao nhất cho sức khỏe của bé.',
    stock: 100,
  },

];
const banners = [
  {
    id: '1',
    alt: 'Sữa bột Meiji số 0',
    image: "/Banners/banner1.png"
  },
  {
    id: '2',
    alt: 'Sữa bột Meiji số 0',
    image: "/Banners/banner2.png"
  },
  {
    id: '3',
    alt: 'Sữa bột Meiji số 0',
    image: "/Banners/banner3.png"
  },
  {
    id: '4',
    alt: 'Sữa bột Meiji số 0',
    image: "/Banners/banner4.png"
  },
  {
    id: '5',
    alt: 'Sữa bột Meiji số 0',
    image: "/Banners/banner5.png"
  },
  {
    id: '6',
    alt: 'Sữa bột Meiji số 0',
    image: "/Banners/banner6.png"
  },
  {
    id: '7',
    alt: 'Sữa bột Meiji số 0',
    image: "/Banners/banner7.png"
  },

];
const bannersPrograms = [
  {
    id: '1',
    alt: 'Sữa bột Meiji số 0',
    image: "/IconsPrograms/icon01.webp"
  },
  {
    id: '2',
    alt: 'Sữa bột Meiji số 0',
    image: "/IconsPrograms/icon02.webp"
  },
  {
    id: '3',
    alt: 'Sữa bột Meiji số 0',
    image: "/IconsPrograms/icon03.webp"
  },
  {
    id: '4',
    alt: 'Sữa bột Meiji số 0',
    image: "/IconsPrograms/icon04.webp"
  },
  {
    id: '5',
    alt: 'Sữa bột Meiji số 0',
    image: "/IconsPrograms/icon05.webp"
  },
  {
    id: '6',
    alt: 'Sữa bột Meiji số 0',
    image: "/IconsPrograms/icon06.webp"
  },
  {
    id: '7',
    alt: 'Sữa bột Meiji số 0',
    image: "/IconsPrograms/icon07.webp"
  },
  {
    id: '8',
    alt: 'Sữa bột Meiji số 0',
    image: "/IconsPrograms/icon08.webp"
  },
  {
    id: '9',
    alt: 'Sữa bột Meiji số 0',
    image: "/IconsPrograms/icon09.webp"
  },
  {
    id: '10',
    alt: 'Sữa bột Meiji số 0',
    image: "/IconsPrograms/icon10.webp"
  },

]

// {
//     id: '11',
//     name: 'Nhiệt kế điện tử Microlife',
//     description: 'Đo nhanh, chính xác, an toàn cho trẻ nhỏ.',
//     price: 325000,
//     image: '',
//   },
//   {
//     id: '12',
//     name: 'Chậu tắm gấp gọn cho bé',
//     description: 'Chất liệu nhựa dẻo cao cấp, tiện lợi khi du lịch.',
//     price: 310000,
//     image: '',
//   },
//   {
//     id: '13',
//     name: 'Bàn chải đánh răng silicone',
//     description: 'Cho bé 6 tháng trở lên, mềm và an toàn.',
//     price: 38000,
//     image: '',
//   },
//   {
//     id: '14',
//     name: 'Đồ chơi gặm nướu hình thú',
//     description: 'Giảm ngứa nướu khi mọc răng, kích thích cảm giác.',
//     price: 59000,
//     image: '',
//   },
//   {
//     id: '15',
//     name: 'Quần áo sơ sinh cotton set 5 món',
//     description: 'Vải cotton 100%, mềm mại và an toàn cho bé sơ sinh.',
//     price: 179000,
//     image: '',
//   },
//   {
//     id: '16',
//     name: 'Mền chăn ủ cho bé',
//     description: 'Giữ ấm tốt, chất liệu minky mềm mịn.',
//     price: 245000,
//     image: '',
//   },
//   {
//     id: '17',
//     name: 'Máy hâm sữa Fatzbaby',
//     description: 'Giữ nhiệt ổn định, dễ sử dụng, phù hợp mọi loại bình.',
//     price: 790000,
//     image: '',
//   },
//   {
//     id: '18',
//     name: 'Yếm ăn silicon có máng hứng',
//     description: 'Chống dính, dễ lau chùi, chống tràn thức ăn.',
//     price: 89000,
//     image: '',
//   },
//   {
//     id: '19',
//     name: 'Bình tập uống ống hút Richell',
//     description: 'Cho bé từ 6 tháng, chống tràn, dễ cầm nắm.',
//     price: 165000,
//     image: '',
//   },
//   {
//     id: '20',
//     name: 'Giày vải mềm chống trượt',
//     description: 'Chống trượt hiệu quả, an toàn khi bé tập đi.',
//     price: 139000,
//     image: '',
//   },
//   {
//     id: '21',
//     name: 'Khăn ướt Mamamy không mùi',
//     description: 'Không chứa cồn, dùng an toàn cho cả da mặt.',
//     price: 25000,
//     image: '',
//   },
//   {
//     id: '22',
//     name: 'Túi trữ sữa Sunmum 250ml',
//     description: 'Chống tràn, giữ nhiệt tốt, có chia vạch rõ ràng.',
//     price: 65000,
//     image: '',
//   },
//   {
//     id: '23',
//     name: 'Xe tập đi bằng gỗ',
//     description: 'Giúp bé rèn luyện bước đi đầu đời vững chắc.',
//     price: 380000,
//     image: '',
//   },
//   {
//     id: '24',
//     name: 'Sữa NAN Optipro số 1',
//     description: 'Dinh dưỡng cần thiết cho trẻ từ 0-6 tháng tuổi.',
//     price: 510000,
//     image: '',
//   },
//   {
//     id: '25',
//     name: 'Túi ngủ cotton cho bé',
//     description: 'Ngủ ngon hơn, không bị hở bụng, không lo cảm lạnh.',
//     price: 210000,
//     image: '',
//   },
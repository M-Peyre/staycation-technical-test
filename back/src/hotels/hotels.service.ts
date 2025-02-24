import { Injectable } from '@nestjs/common';
import { ConfigService } from '../config.service';
import DB from '../db';

const MOCK_HOTELS = [
  {
    id: 29,
    name: 'Hôtel Saint Marc',
    stars: 4,
    preview: 'Accès piscine privative + hammam + petit dej inclus',
    pictureId:
      'https:\/\/staycation.twic.pics\/v1\/cover=1000x-\/image:pictures\/production\/da50d138716409f296035ff189141ef1.jpg',
    reviews: 154,
    averageScore: 9.3142857143,
    highestPrice: 249,
    lowestPrice: 177,
  },
  {
    id: 4,
    name: 'Terrass Hotel',
    stars: 4,
    preview:
      'Accès rooftop & terrasse + sauna & hammam privatifs + petit dej inclus',
    pictureId:
      'https:\/\/staycation.twic.pics\/v1\/cover=1000x-\/image:pictures\/production\/4d56a8c573dd7f614617f9fd55f2b890.jpg',
    reviews: 30,
    averageScore: 9.0,
    highestPrice: 149,
    lowestPrice: 134,
  },
  {
    id: 7,
    name: 'Bourgogne & Montana',
    stars: 4,
    preview: 'Massage duo + privatisation sauna + tea time + petit dej inclus',
    pictureId:
      'https:\/\/staycation.twic.pics\/v1\/cover=1000x-\/image:pictures\/production\/0be2d9498225b64c544b6e86245a9ccb.jpg',
    reviews: 30,
    averageScore: 8.56,
    highestPrice: 280,
    lowestPrice: 249,
  },
  {
    id: 12,
    name: 'Hôtel Le Saint ',
    stars: 4,
    preview: 'Accès hammam + vélos + champagne + petit dej inclus',
    pictureId:
      'https:\/\/staycation.twic.pics\/v1\/cover=1000x-\/image:pictures\/production\/374beacdc1ebffa4403480f2ce972a2e.jpg',
    reviews: 72,
    averageScore: 9.2,
    highestPrice: 300,
    lowestPrice: 210,
  },
  {
    id: 26,
    name: 'Hôtel 1K',
    stars: 4,
    preview: 'Tapas + cocktails + petit dej inclus',
    pictureId:
      'https:\/\/staycation.twic.pics\/v1\/cover=1000x-\/image:pictures\/production\/374041cc8ef648d5b5dce874c08d36b7.jpg',
    reviews: 36,
    averageScore: 8.6222222222,
    highestPrice: 189,
    lowestPrice: 139,
  },
  {
    id: 19,
    name: 'Maison Albar Le Pont-Neuf',
    stars: 5,
    preview: 'Accès piscine + jacuzzi + hammam + champagne + petit dej inclus',
    pictureId:
      'https:\/\/staycation.twic.pics\/v1\/cover=1000x-\/image:pictures\/production\/db9cb38098fbb4e6438cd0112c2606f1.jpg',
    reviews: 72,
    averageScore: 9.25,
    highestPrice: 279,
    lowestPrice: 239,
  },
  {
    id: 25,
    name: 'Hôtel de Nell',
    stars: 5,
    preview: 'Cérémonial de bain + coupes de champagne + petit dej inclus',
    pictureId:
      'https:\/\/staycation.twic.pics\/v1\/cover=1000x-\/image:pictures\/production\/7894c67af5374f29b2a5f98e376b9a7a.jpg',
    reviews: 140,
    averageScore: 9.44,
    highestPrice: 340,
    lowestPrice: 290,
  },
  {
    id: 21,
    name: 'Pavillon de la Reine',
    stars: 5,
    preview: 'Accès jacuzzi + hammam + bt. de vin + petit dej inclus',
    pictureId:
      'https:\/\/staycation.twic.pics\/v1\/cover=1000x-\/image:pictures\/production\/c7b3bb8998d06406ec60da8a0273b511.jpg',
    reviews: 153,
    averageScore: 8.9411764706,
    highestPrice: 325,
    lowestPrice: 250,
  },
  {
    id: 14,
    name: 'COQ Hôtel',
    stars: 4,
    preview: 'Fantastique dîner raclette + vin + Mario Kart + petit dej inclus',
    pictureId:
      'https:\/\/staycation.twic.pics\/v1\/cover=1000x-\/image:pictures\/production\/78f3c63c75ae9a756008248a436d5706.jpg',
    reviews: 100,
    averageScore: 9.184,
    highestPrice: 170,
    lowestPrice: 130,
  },
  {
    id: 17,
    name: 'Da Vinci',
    stars: 4,
    preview: 'Accès piscine privative + bt. de Prosecco inclus',
    pictureId:
      'https:\/\/staycation.twic.pics\/v1\/cover=1000x-\/image:pictures\/production\/435ddbf186a1085304b7af9b99ff26b1.jpg',
    reviews: 10,
    averageScore: 8.32,
    highestPrice: 235,
    lowestPrice: 205,
  },
  {
    id: 20,
    name: "LAZ' Hotel Spa Urbain",
    stars: 4,
    preview: 'Accès piscine + sauna + hammam + petit dej inclus',
    pictureId:
      'https:\/\/staycation.twic.pics\/v1\/cover=1000x-\/image:pictures\/production\/430a91e17137913fdeb012830386ef86.jpg',
    reviews: 64,
    averageScore: 8.575,
    highestPrice: 175,
    lowestPrice: 141,
  },
  {
    id: 28,
    name: 'Eiffel Blomet',
    stars: 4,
    preview: 'Accès piscine + hammam + sauna + petit dej inclus ',
    pictureId:
      'https:\/\/staycation.twic.pics\/v1\/cover=1000x-\/image:pictures\/production\/cb4c7f5b7157408a33fcd1ac946f0d4a.jpg',
    reviews: 781,
    averageScore: 8.8845070423,
    highestPrice: 274,
    lowestPrice: 140,
  },
  {
    id: 13,
    name: 'Hôtel Panache',
    stars: 4,
    preview: 'Produits Bonne Nouvelle + petit dej inclus',
    pictureId:
      'https:\/\/staycation.twic.pics\/v1\/cover=1000x-\/image:pictures\/production\/1719a617fa946f339d8b38ebb52f25fe.jpg',
    reviews: 15,
    averageScore: 6.72,
    highestPrice: 160,
    lowestPrice: 109,
  },
  {
    id: 1,
    name: 'Hôtel La Lanterne',
    stars: 4,
    preview: 'Accès piscine + hammam + vin + petit dej inclus',
    pictureId:
      'https:\/\/staycation.twic.pics\/v1\/cover=1000x-\/image:pictures\/production\/3c3811c53bccb69bba40424e79c013ca.jpg',
    reviews: 24,
    averageScore: 8.8,
    highestPrice: 230,
    lowestPrice: 170,
  },
  {
    id: 5,
    name: 'Square Louvois',
    stars: 4,
    preview: 'Accès piscine + tea time + petit dej inclus',
    pictureId:
      'https:\/\/staycation.twic.pics\/v1\/cover=1000x-\/image:pictures\/production\/24e1b436b2c8c957b5aca55c4225e425.jpg',
    reviews: 280,
    averageScore: 9.0285714286,
    highestPrice: 250,
    lowestPrice: 155,
  },
  {
    id: 18,
    name: 'Platine Hotel',
    stars: 4,
    preview: 'Accès sauna & hammam + 1\/2 bt. champagne + petit dej inclus',
    pictureId:
      'https:\/\/staycation.twic.pics\/v1\/cover=1000x-\/image:pictures\/production\/917230884a30668784bde487149c58db.jpg',
    reviews: 11,
    averageScore: 8.9090909091,
    highestPrice: 189,
    lowestPrice: 189,
  },
  {
    id: 2,
    name: 'Molitor',
    stars: 5,
    preview: 'Accès piscines + hammam + fitness + petit dej inclus',
    pictureId:
      'https:\/\/staycation.twic.pics\/v1\/cover=1000x-\/image:pictures\/production\/aca3d864cc3d90b591287ad36e1d4f72.jpg',
    reviews: 378,
    averageScore: 9.0603174603,
    highestPrice: 305,
    lowestPrice: 250,
  },
  {
    id: 16,
    name: 'Parister',
    stars: 5,
    preview: 'Accès piscine + hammam + planche mixte & vin + petit dej inclus',
    pictureId:
      'https:\/\/staycation.twic.pics\/v1\/cover=1000x-\/image:pictures\/production\/0def9a6adb20dd3c17cf9fbf3c6c9f52.jpg',
    reviews: 88,
    averageScore: 8.3818181818,
    highestPrice: 235,
    lowestPrice: 205,
  },
  {
    id: 23,
    name: "Le Dokhan's",
    stars: 5,
    preview: 'Atelier dégustation champagne + petit dej inclus',
    pictureId:
      'https:\/\/staycation.twic.pics\/v1\/cover=1000x-\/image:pictures\/production\/1a7517f0e1de3ff06e17337c670e9812.jpg',
    reviews: 12,
    averageScore: 8.6666666667,
    highestPrice: 230,
    lowestPrice: 190,
  },
  {
    id: 11,
    name: "L'Echiquier",
    stars: 4,
    preview: 'Atelier mixologie + cocktails + tea time + petit dej inclus',
    pictureId:
      'https:\/\/staycation.twic.pics\/v1\/cover=1000x-\/image:pictures\/production\/ff4e6c89caba374c1dc376f7f5c4e95a.jpg',
    reviews: 60,
    averageScore: 9.4933333333,
    highestPrice: 180,
    lowestPrice: 170,
  },
  {
    id: 8,
    name: 'Boutet Bastille',
    stars: 5,
    preview: 'Accès piscine + sauna-hammam + chocolat chaud + petit dej inclus',
    pictureId:
      'https:\/\/staycation.twic.pics\/v1\/cover=1000x-\/image:pictures\/production\/868806c118b6c353560063c6c063b8b0.jpg',
    reviews: 145,
    averageScore: 8.5517241379,
    highestPrice: 255,
    lowestPrice: 200,
  },
];

@Injectable()
export class HotelsService {
  constructor(private readonly configService: ConfigService) {}
  async findAll() {
    if (this.configService.isMocked()) {
      return MOCK_HOTELS;
    } else {
      try {
        return await DB.query(
          'SELECT' +
            'h.id AS id,' +
            'h.name AS name,' +
            'h.stars AS stars,' +
            'h.preview AS preview,' +
            'h.picture_id AS pictureId,' +
            'COUNT(r.id) AS reviews,' +
            'AVG(r.score) AS averageScore,' +
            'MAX(o.discount_price) AS highestPrice,' +
            'MIN(o.discount_price) AS lowestPrice' +
            'FROM ' +
            'public.hotels h' +
            'LEFT JOIN ' +
            'public.reviews r ON h.id = r.id' +
            'JOIN ' +
            'public.rooms ro ON h.id = ro.id' +
            'JOIN ' +
            'public.openings o ON ro.id = o.room_id' +
            'WHERE ' +
            'o.sale_id = 90 AND o.stock > 0' +
            'GROUP BY ' +
            'h.id, h.name, h.stars, h.preview, h.picture_id;',
        );
      } catch (error) {
        console.error('error', error);
        throw error;
      }
    }
  }

  async findOne(id: number) {
    if (this.configService.isMocked()) {
      return MOCK_HOTELS.find((hotel) => hotel.id === id);
    } else {
      try {
        return await DB.query('SELECT * FROM hotels WHERE id=$1::int', [id]);
      } catch (error) {
        console.error('error', error);
        throw error;
      }
    }
  }
}

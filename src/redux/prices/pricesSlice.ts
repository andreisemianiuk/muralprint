import { createSlice } from '@reduxjs/toolkit'
import { IPriceState } from './pricesTypes'


const initialState: IPriceState = {
  prices: [
    // Календари
    {
      id: 'calendars',
      categories: [
        // квартальный
        {
          id: 'quarter',
          // Рекламные поля
          advertisingFields: [
            {
              // Одно рекламное поле
              id: 'oneField',
              
              // Сетка
              net: [
                {
                  // Стандарт
                  id: 'net-standard',
                  
                  // Крепление
                  binding: [
                    {
                      // Люверс
                      id: 'grommet',
                      
                      // Тиражи
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '8.8',
                          priceForAll: '88',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '6.44',
                          priceForAll: '322',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '5.9',
                          priceForAll: '590',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '5.2',
                          priceForAll: '1560',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '4.9',
                          priceForAll: '2450',
                        },
                      ],
                    },
                    {
                      // Планка
                      id: 'plank',
                      
                      // Тиражи
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '9.8',
                          priceForAll: '98',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '7.44',
                          priceForAll: '372',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '6.9',
                          priceForAll: '690',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '6.2',
                          priceForAll: '1860',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '5.9',
                          priceForAll: '2950',
                        },
                      ],
                    },
                  ],
                },
                {
                  // Индивидуальная
                  id: 'individual',
                  
                  // Крепление
                  binding: [
                    {
                      // Люверс
                      id: 'grommet',
                      
                      // Тиражи
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '15.46',
                          priceForAll: '154.6',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '14.96',
                          priceForAll: '748',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '14.46',
                          priceForAll: '1446',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '13.96',
                          priceForAll: '4188',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '13.46',
                          priceForAll: '6730',
                        },
                      ],
                    },
                    {
                      // Планка
                      id: 'plank',
                      
                      // Тиражи
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '16.46',
                          priceForAll: '164.6',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '15.96',
                          priceForAll: '798',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '15.46',
                          priceForAll: '1546',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '14.96',
                          priceForAll: '4488',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '14.46',
                          priceForAll: '7230',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              // Три рекламных поля
              id: 'threeFields',
              
              // Сетка
              net: [
                {
                  // Стандарт
                  id: 'net-standard',
                  
                  // Крепление
                  binding: [
                    {
                      id: 'grommet',
                      
                      // Тиражи
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '10',
                          priceForAll: '100',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '6.54',
                          priceForAll: '327',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '6.19',
                          priceForAll: '619',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '5.67',
                          priceForAll: '1701',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '5.02',
                          priceForAll: '2510',
                        },
                      ],
                    },
                    {
                      // Планка
                      id: 'plank',
                      
                      // Тиражи
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '11',
                          priceForAll: '110',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '7.54',
                          priceForAll: '377',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '7.19',
                          priceForAll: '719',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '6.67',
                          priceForAll: '2001',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '6.02',
                          priceForAll: '3010',
                        },
                      ],
                    },
                  ],
                },
                {
                  // Индивидуальная
                  id: 'individual',
                  
                  // Крепление
                  binding: [
                    {
                      // Люверс
                      id: 'grommet',
                      
                      // Тиражи
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '16.66',
                          priceForAll: '166.6',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '16.16',
                          priceForAll: '808',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '15.66',
                          priceForAll: '1566',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '15.16',
                          priceForAll: '1548',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '14.66',
                          priceForAll: '7330',
                        },
                      ],
                    },
                    {
                      // Планка
                      id: 'plank',
                      
                      // Тиражи
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '17.66',
                          priceForAll: '1766',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '17.16',
                          priceForAll: '858',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '16.66',
                          priceForAll: '1666',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '16.16',
                          priceForAll: '4848',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '15.66',
                          priceForAll: '7830',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        // "Домик"
        {
          id: 'home',
          // Тип
          type: [
            {
              // Стандартный
              id: 'block-standard',
              
              // Размер
              size: [
                {
                  id: '210x100',
                  // Тиражи
                  circulations: [
                    {
                      id: '10',
                      name: 'coins',
                      priceForSingle: '4.5',
                      priceForAll: '45',
                    },
                    {
                      id: '50',
                      name: 'coins',
                      priceForSingle: '1.38',
                      priceForAll: '69',
                    },
                    {
                      id: '100',
                      name: 'coins',
                      priceForSingle: '0.97',
                      priceForAll: '97',
                    },
                    {
                      id: '300',
                      name: 'coins',
                      priceForSingle: '0.65',
                      priceForAll: '195',
                    },
                    {
                      id: '500',
                      name: 'coins',
                      priceForSingle: '0.65',
                      priceForAll: '325',
                    },
                  ],
                },
              ],
            },
            {
              // Перекидной
              id: 'crossover',
              size: [
                {
                  id: '210x100',
                  cursor: [
                    {
                      id: 'plus',
                      // Тиражи
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '8.72',
                          priceForAll: '87.2',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '5.18',
                          priceForAll: '259',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '4.01',
                          priceForAll: '401',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '3.23',
                          priceForAll: '969',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '2.65',
                          priceForAll: '1325',
                        },
                      ],
                    },
                    {
                      id: 'minus',
                      // Тиражи
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '8',
                          priceForAll: '80',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '4.68',
                          priceForAll: '234',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '3.51',
                          priceForAll: '351',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '2.73',
                          priceForAll: '819',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '2.25',
                          priceForAll: '1125',
                        },
                      ],
                    },
                  ],
                },
                {
                  id: '210x120',
                  cursor: [
                    {
                      id: 'plus',
                      // Тиражи
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '9.62',
                          priceForAll: '962',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '5.31',
                          priceForAll: '265.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '4.16',
                          priceForAll: '416',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '3.25',
                          priceForAll: '975',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '2.65',
                          priceForAll: '1325',
                        },
                      ],
                    },
                    {
                      id: 'minus',
                      // Тиражи
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '8.9',
                          priceForAll: '89',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '4.81',
                          priceForAll: '240.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '3.66',
                          priceForAll: '366',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '2.75',
                          priceForAll: '825',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '2.25',
                          priceForAll: '1125',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        // "Карманный"
        {
          id: 'pocket',
          block: [
            {
              id: 'block-4+4',
              roundingCorners: [
                {
                  id: 'round-plus',
                  circulations: [
                    {
                      id: '10',
                      name: 'coins',
                      priceForSingle: '2.3',
                      priceForAll: '23',
                    },
                    {
                      id: '50',
                      name: 'coins',
                      priceForSingle: '1.04',
                      priceForAll: '52',
                    },
                    {
                      id: '100',
                      name: 'coins',
                      priceForSingle: '0.74',
                      priceForAll: '74',
                    },
                    {
                      id: '300',
                      name: 'coins',
                      priceForSingle: '0.51',
                      priceForAll: '153',
                    },
                    {
                      id: '500',
                      name: 'coins',
                      priceForSingle: '0.46',
                      priceForAll: '230',
                    },
                  ],
                },
                {
                  id: 'round-minus',
                  circulations: [
                    {
                      id: '10',
                      name: 'coins',
                      priceForSingle: '2',
                      priceForAll: '20',
                    },
                    {
                      id: '50',
                      name: 'coins',
                      priceForSingle: '0.74',
                      priceForAll: '37',
                    },
                    {
                      id: '100',
                      name: 'coins',
                      priceForSingle: '0.44',
                      priceForAll: '44',
                    },
                    {
                      id: '300',
                      name: 'coins',
                      priceForSingle: '0.21',
                      priceForAll: '63',
                    },
                    {
                      id: '500',
                      name: 'coins',
                      priceForSingle: '0.16',
                      priceForAll: '80',
                    },
                  ],
                },
              
              ],
            },
            {
              id: 'block-4+0',
              // roundingCorners: [
              //   {
              //     id: 'r+',
              //     circulations: [
              //       {
              //         id: '10',
              //         name: 'coins',
              //         priceForSingle: '2.3',
              //         priceForAll: '23',
              //       },
              //       {
              //         id: '50',
              //         name: 'coins',
              //         priceForSingle: '1.04',
              //         priceForAll: '52',
              //       },
              //       {
              //         id: '100',
              //         name: 'coins',
              //         priceForSingle: '0.74',
              //         priceForAll: '74',
              //       },
              //       {
              //         id: '300',
              //         name: 'coins',
              //         priceForSingle: '0.51',
              //         priceForAll: '153',
              //       },
              //       {
              //         id: '500',
              //         name: 'coins',
              //         priceForSingle: '0.46',
              //         priceForAll: '230',
              //       },
              //     ],
              //   },
              //   {
              //     id: 'r-',
              //     circulations: [
              //       {
              //         id: '10',
              //         name: 'coins',
              //         priceForSingle: '2',
              //         priceForAll: '20',
              //       },
              //       {
              //         id: '50',
              //         name: 'coins',
              //         priceForSingle: '0.74',
              //         priceForAll: '37',
              //       },
              //       {
              //         id: '100',
              //         name: 'coins',
              //         priceForSingle: '0.44',
              //         priceForAll: '44',
              //       },
              //       {
              //         id: '300',
              //         name: 'coins',
              //         priceForSingle: '0.21',
              //         priceForAll: '63',
              //       },
              //       {
              //         id: '500',
              //         name: 'coins',
              //         priceForSingle: '0.16',
              //         priceForAll: '80',
              //       },
              //     ],
              //   },
              //
              // ]
            },
          ],
        },
      ],
    },
    // Блокноты
    {
      id: 'notes',
      size: [
        {
          id: 'A6', noteBlock: [
            {
              id: 'note-0+0', circulations: [
                {
                  id: '10',
                  name: 'coins',
                  priceForSingle: '3.5',
                  priceForAll: '35',
                },
                {
                  id: '50',
                  name: 'coins',
                  priceForSingle: '2.9',
                  priceForAll: '145',
                },
                {
                  id: '100',
                  name: 'coins',
                  priceForSingle: '1.97',
                  priceForAll: '197',
                },
                {
                  id: '300',
                  name: 'coins',
                  priceForSingle: '1.4',
                  priceForAll: '420',
                },
                {
                  id: '500',
                  name: 'coins',
                  priceForSingle: '1.28',
                  priceForAll: '640',
                },
              ],
            },
            {
              id: 'note-1+0', circulations: [
                {
                  id: '10',
                  name: 'coins',
                  priceForSingle: '16.5',
                  priceForAll: '165',
                },
                {
                  id: '50',
                  name: 'coins',
                  priceForSingle: '4.64',
                  priceForAll: '232',
                },
                {
                  id: '100',
                  name: 'coins',
                  priceForSingle: '2.99',
                  priceForAll: '299',
                },
                {
                  id: '300',
                  name: 'coins',
                  priceForSingle: '1.97',
                  priceForAll: '591',
                },
                {
                  id: '500',
                  name: 'coins',
                  priceForSingle: '1.74',
                  priceForAll: '570',
                },
              ],
            },
            {
              id: 'note-4+0', circulations: [
                {
                  id: '10',
                  name: 'coins',
                  priceForSingle: '17.6',
                  priceForAll: '176',
                },
                {
                  id: '50',
                  name: 'coins',
                  priceForSingle: '6.12',
                  priceForAll: '306',
                },
                {
                  id: '100',
                  name: 'coins',
                  priceForSingle: '4.1',
                  priceForAll: '410',
                },
                {
                  id: '300',
                  name: 'coins',
                  priceForSingle: '2.34',
                  priceForAll: '702',
                },
                {
                  id: '500',
                  name: 'coins',
                  priceForSingle: '1.96',
                  priceForAll: '980',
                },
              ],
            },
          ],
        },
        {
          id: 'A5', noteBlock: [
            {
              id: 'note-0+0', circulations: [
                {
                  id: '10',
                  name: 'coins',
                  priceForSingle: '4.5',
                  priceForAll: '45',
                },
                {
                  id: '50',
                  name: 'coins',
                  priceForSingle: '3.12',
                  priceForAll: '156',
                },
                {
                  id: '100',
                  name: 'coins',
                  priceForSingle: '2.26',
                  priceForAll: '226',
                },
                {
                  id: '300',
                  name: 'coins',
                  priceForSingle: '1.73',
                  priceForAll: '519',
                },
                {
                  id: '500',
                  name: 'coins',
                  priceForSingle: '1.63',
                  priceForAll: '815',
                },
              ],
            },
            {
              id: 'note-1+0', circulations: [
                {
                  id: '10',
                  name: 'coins',
                  priceForSingle: '16.5',
                  priceForAll: '165',
                },
                {
                  id: '50',
                  name: 'coins',
                  priceForSingle: '5.14',
                  priceForAll: '257',
                },
                {
                  id: '100',
                  name: 'coins',
                  priceForSingle: '3.6',
                  priceForAll: '360',
                },
                {
                  id: '300',
                  name: 'coins',
                  priceForSingle: '2.49',
                  priceForAll: '747',
                },
                {
                  id: '500',
                  name: 'coins',
                  priceForSingle: '2.2',
                  priceForAll: '1100',
                },
              ],
            },
            {
              id: 'note-4+0', circulations: [
                {
                  id: '10',
                  name: 'coins',
                  priceForSingle: '17.6',
                  priceForAll: '176',
                },
                {
                  id: '50',
                  name: 'coins',
                  priceForSingle: '7.35',
                  priceForAll: '367.5',
                },
                {
                  id: '100',
                  name: 'coins',
                  priceForSingle: '4.71',
                  priceForAll: '471',
                },
                {
                  id: '300',
                  name: 'coins',
                  priceForSingle: '2.95',
                  priceForAll: '885',
                },
                {
                  id: '500',
                  name: 'coins',
                  priceForSingle: '2.61',
                  priceForAll: '1305',
                },
              ],
            },
          ],
        },
        {
          id: 'A4', noteBlock: [
            {
              id: 'note-0+0', circulations: [
                {
                  id: '10',
                  name: 'coins',
                  priceForSingle: '5',
                  priceForAll: '50',
                },
                {
                  id: '50',
                  name: 'coins',
                  priceForSingle: '3.78',
                  priceForAll: '189',
                },
                {
                  id: '100',
                  name: 'coins',
                  priceForSingle: '3',
                  priceForAll: '300',
                },
                {
                  id: '300',
                  name: 'coins',
                  priceForSingle: '2.5',
                  priceForAll: '750',
                },
                {
                  id: '500',
                  name: 'coins',
                  priceForSingle: '2.38',
                  priceForAll: '1190',
                },
              ],
            },
            {
              id: 'note-1+0', circulations: [
                {
                  id: '10',
                  name: 'coins',
                  priceForSingle: '16.5',
                  priceForAll: '165',
                },
                {
                  id: '50',
                  name: 'coins',
                  priceForSingle: '6.31',
                  priceForAll: '315.5',
                },
                {
                  id: '100',
                  name: 'coins',
                  priceForSingle: '4.77',
                  priceForAll: '477',
                },
                {
                  id: '300',
                  name: 'coins',
                  priceForSingle: '3.5',
                  priceForAll: '1050',
                },
                {
                  id: '500',
                  name: 'coins',
                  priceForSingle: '3.21',
                  priceForAll: '1605',
                },
              ],
            },
            {
              id: 'note-4+0', circulations: [
                {
                  id: '10',
                  name: 'coins',
                  priceForSingle: '17.6',
                  priceForAll: '176',
                },
                {
                  id: '50',
                  name: 'coins',
                  priceForSingle: '7.44',
                  priceForAll: '372',
                },
                {
                  id: '100',
                  name: 'coins',
                  priceForSingle: '5.9',
                  priceForAll: '590',
                },
                {
                  id: '300',
                  name: 'coins',
                  priceForSingle: '4.15',
                  priceForAll: '1245',
                },
                {
                  id: '500',
                  name: 'coins',
                  priceForSingle: '3.76',
                  priceForAll: '1880',
                },
              ],
            },
          ],
        },
      ],
    },
    // Открытки
    {
      id: 'cards',
      paper: [
        {
          id: 'coated-paper',
          size: [
            {
              id: '200x200',
              attributes: [
                {
                  id: 'laser-true',
                  lamination: [
                    {
                      id: 'without',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.78',
                          priceForAll: '27.8',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.64',
                          priceForAll: '82',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.38',
                          priceForAll: '138',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.13',
                          priceForAll: '339',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.88',
                          priceForAll: '440',
                        },
                      ],
                    },
                    {
                      id: 'matte-glossy',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.99',
                          priceForAll: '29.9',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.85',
                          priceForAll: '92.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.59',
                          priceForAll: '159',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.32',
                          priceForAll: '396',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.07',
                          priceForAll: '535',
                        },
                      ],
                    },
                    {
                      id: 'soft-touch',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '3.62',
                          priceForAll: '36.2',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '2.42',
                          priceForAll: '121',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '2.16',
                          priceForAll: '216',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.83',
                          priceForAll: '549',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.59',
                          priceForAll: '795',
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 'liner-true',
                  lamination: [
                    {
                      id: 'without',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '0.98',
                          priceForAll: '9.8',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '0.82',
                          priceForAll: '41',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '0.74',
                          priceForAll: '74',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.68',
                          priceForAll: '204',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.62',
                          priceForAll: '310',
                        },
                      ],
                    },
                    {
                      id: 'matte-glossy',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '1.19',
                          priceForAll: '11.9',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.03',
                          priceForAll: '51.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '0.95',
                          priceForAll: '95',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.87',
                          priceForAll: '261',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.81',
                          priceForAll: '405',
                        },
                      ],
                    },
                    {
                      id: 'soft-touch',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '1.82',
                          priceForAll: '18.2',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.6',
                          priceForAll: '80',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.52',
                          priceForAll: '152',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.38',
                          priceForAll: '414',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.33',
                          priceForAll: '665',
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 'liner&laser-true',
                  lamination: [
                    {
                      id: 'without',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.98',
                          priceForAll: '29.8',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.82',
                          priceForAll: '91',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.54',
                          priceForAll: '154',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.28',
                          priceForAll: '384',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.02',
                          priceForAll: '510',
                        },
                      ],
                    },
                    {
                      id: 'matte-glossy',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '3.19',
                          priceForAll: '31.9',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '2.03',
                          priceForAll: '101.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.75',
                          priceForAll: '175',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.47',
                          priceForAll: '441',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.21',
                          priceForAll: '605',
                        },
                      ],
                    },
                    {
                      id: 'soft-touch',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '3.82',
                          priceForAll: '38.2',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '2.6',
                          priceForAll: '130',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '2.32',
                          priceForAll: '232',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.98',
                          priceForAll: '594',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.73',
                          priceForAll: '865',
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 'liner&laser-false',
                  lamination: [
                    {
                      id: 'without',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '0.78',
                          priceForAll: '7.8',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '0.64',
                          priceForAll: '32',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '0.58',
                          priceForAll: '58',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.53',
                          priceForAll: '159',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.48',
                          priceForAll: '240',
                        },
                      ],
                    },
                    {
                      id: 'matte-glossy',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '0.99',
                          priceForAll: '9.9',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '0.85',
                          priceForAll: '42.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '0.79',
                          priceForAll: '79',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.72',
                          priceForAll: '216',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.67',
                          priceForAll: '335',
                        },
                      ],
                    },
                    {
                      id: 'soft-touch',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '1.62',
                          priceForAll: '16.2',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.42',
                          priceForAll: '71',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.36',
                          priceForAll: '136',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.23',
                          priceForAll: '369',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.19',
                          priceForAll: '595',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: '200x100',
              attributes: [
                {
                  id: 'liner&laser-false',
                  lamination: [
                    {
                      id: 'without',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '0.31',
                          priceForAll: '3.1',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '0.23',
                          priceForAll: '11.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '0.2',
                          priceForAll: '20',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.18',
                          priceForAll: '54',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.16',
                          priceForAll: '80',
                        },
                      ],
                    },
                    {
                      id: 'matte-glossy',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '0.4',
                          priceForAll: '4',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '0.31',
                          priceForAll: '15.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '0.27',
                          priceForAll: '27',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.24',
                          priceForAll: '72',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.23',
                          priceForAll: '115',
                        },
                      ],
                    },
                    {
                      id: 'soft-touch',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '0.65',
                          priceForAll: '6.5',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '0.51',
                          priceForAll: '25.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '0.46',
                          priceForAll: '46',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.41',
                          priceForAll: '123',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.4',
                          priceForAll: '200',
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 'laser-true',
                  lamination: [
                    {
                      id: 'without',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.31',
                          priceForAll: '23.1',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.23',
                          priceForAll: '61.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1',
                          priceForAll: '100',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.78',
                          priceForAll: '234',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.56',
                          priceForAll: '280',
                        },
                      ],
                    },
                    {
                      id: 'matte-glossy',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.4',
                          priceForAll: '24',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.31',
                          priceForAll: '65.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.07',
                          priceForAll: '107',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.84',
                          priceForAll: '252',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.63',
                          priceForAll: '315',
                        },
                      ],
                    },
                    {
                      id: 'soft-touch',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.65',
                          priceForAll: '26.5',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.51',
                          priceForAll: '75.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.26',
                          priceForAll: '126',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.01',
                          priceForAll: '303',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.8',
                          priceForAll: '400',
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 'liner-true',
                  lamination: [
                    {
                      id: 'without',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '0.51',
                          priceForAll: '51',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '0.41',
                          priceForAll: '20.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '0.36',
                          priceForAll: '36',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.33',
                          priceForAll: '99',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.3',
                          priceForAll: '150',
                        },
                      ],
                    },
                    {
                      id: 'matte-glossy',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '0.6',
                          priceForAll: '6',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '0.49',
                          priceForAll: '24.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '0.43',
                          priceForAll: '43',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.39',
                          priceForAll: '117',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.37',
                          priceForAll: '185',
                        },
                      ],
                    },
                    {
                      id: 'soft-touch',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '0.85',
                          priceForAll: '85',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '0.69',
                          priceForAll: '34.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '0.62',
                          priceForAll: '62',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.56',
                          priceForAll: '168',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.54',
                          priceForAll: '270',
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 'liner&laser-true',
                  lamination: [
                    {
                      id: 'without',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.51',
                          priceForAll: '25.1',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.41',
                          priceForAll: '70.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.16',
                          priceForAll: '116',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.93',
                          priceForAll: '279',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.7',
                          priceForAll: '350',
                        },
                      ],
                    },
                    {
                      id: 'matte-glossy',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.6',
                          priceForAll: '26',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.49',
                          priceForAll: '74.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.23',
                          priceForAll: '123',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.99',
                          priceForAll: '297',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.77',
                          priceForAll: '385',
                        },
                      ],
                    },
                    {
                      id: 'soft-touch',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.85',
                          priceForAll: '28.5',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.69',
                          priceForAll: '84.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.42',
                          priceForAll: '142',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.16',
                          priceForAll: '348',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.94',
                          priceForAll: '470',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: '105x148',
              attributes: [
                {
                  id: 'liner&laser-false',
                  lamination: [
                    {
                      id: 'without',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '0.31',
                          priceForAll: '31',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '0.16',
                          priceForAll: '8',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '0.14',
                          priceForAll: '14',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.12',
                          priceForAll: '36',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.11',
                          priceForAll: '55',
                        },
                      ],
                    },
                    {
                      id: 'matte-glossy',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '0.4',
                          priceForAll: '4',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '0.21',
                          priceForAll: '10.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '0.19',
                          priceForAll: '19',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.17',
                          priceForAll: '51',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.15',
                          priceForAll: '75',
                        },
                      ],
                    },
                    {
                      id: 'soft-touch',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '0.65',
                          priceForAll: '6.5',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '0.43',
                          priceForAll: '17',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '0.33',
                          priceForAll: '33',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.28',
                          priceForAll: '84',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.27',
                          priceForAll: '135',
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 'laser-true',
                  lamination: [
                    {
                      id: 'without',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.31',
                          priceForAll: '23.1',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.16',
                          priceForAll: '58',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '0.94',
                          priceForAll: '94',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.72',
                          priceForAll: '216',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.51',
                          priceForAll: '255',
                        },
                      ],
                    },
                    {
                      id: 'matte-glossy',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.4',
                          priceForAll: '24',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.21',
                          priceForAll: '60.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '0.99',
                          priceForAll: '99',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.77',
                          priceForAll: '231',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.55',
                          priceForAll: '275',
                        },
                      ],
                    },
                    {
                      id: 'soft-touch',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.65',
                          priceForAll: '26.5',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.34',
                          priceForAll: '67',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.13',
                          priceForAll: '113',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.88',
                          priceForAll: '264',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.67',
                          priceForAll: '335',
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 'liner-true',
                  lamination: [
                    {
                      id: 'without',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '0.51',
                          priceForAll: '5.1',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '0.34',
                          priceForAll: '17',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '0.3',
                          priceForAll: '30',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.27',
                          priceForAll: '81',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.25',
                          priceForAll: '125',
                        },
                      ],
                    },
                    {
                      id: 'matte-glossy',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '0.6',
                          priceForAll: '6',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '0.39',
                          priceForAll: '19.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '0.35',
                          priceForAll: '35',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.32',
                          priceForAll: '96',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.29',
                          priceForAll: '145',
                        },
                      ],
                    },
                    {
                      id: 'soft-touch',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '0.85',
                          priceForAll: '8.5',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '0.52',
                          priceForAll: '26',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '0.49',
                          priceForAll: '49',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.43',
                          priceForAll: '129',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.41',
                          priceForAll: '205',
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 'liner&laser-true',
                  lamination: [
                    {
                      id: 'without',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.51',
                          priceForAll: '25.1',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.34',
                          priceForAll: '67',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.1',
                          priceForAll: '110',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.87',
                          priceForAll: '261',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.65',
                          priceForAll: '325',
                        },
                      ],
                    },
                    {
                      id: 'matte-glossy',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.6',
                          priceForAll: '26',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.39',
                          priceForAll: '69.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.15',
                          priceForAll: '115',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.92',
                          priceForAll: '276',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.69',
                          priceForAll: '345',
                        },
                      ],
                    },
                    {
                      id: 'soft-touch',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.85',
                          priceForAll: '28.5',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.52',
                          priceForAll: '76',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.29',
                          priceForAll: '129',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.03',
                          priceForAll: '309',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.81',
                          priceForAll: '405',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: '148x210',
              attributes: [
                {
                  id: 'liner&laser-false',
                  lamination: [
                    {
                      id: 'without',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '0.46',
                          priceForAll: '4.6',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '0.34',
                          priceForAll: '17',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '0.29',
                          priceForAll: '29',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.27',
                          priceForAll: '81',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.24',
                          priceForAll: '120',
                        },
                      ],
                    },
                    {
                      id: 'matte-glossy',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '0.6',
                          priceForAll: '6',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '0.44',
                          priceForAll: '22',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '0.4',
                          priceForAll: '40',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.36',
                          priceForAll: '108',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.34',
                          priceForAll: '170',
                        },
                      ],
                    },
                    {
                      id: 'soft-touch',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '0.98',
                          priceForAll: '9.8',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '0.74',
                          priceForAll: '37',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '0.68',
                          priceForAll: '68',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.62',
                          priceForAll: '186',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.6',
                          priceForAll: '300',
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 'laser-true',
                  lamination: [
                    {
                      id: 'without',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.46',
                          priceForAll: '24.6',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.34',
                          priceForAll: '67',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.09',
                          priceForAll: '109',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.87',
                          priceForAll: '261',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.64',
                          priceForAll: '320',
                        },
                      ],
                    },
                    {
                      id: 'matte-glossy',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.6',
                          priceForAll: '26',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.44',
                          priceForAll: '72',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.2',
                          priceForAll: '120',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.96',
                          priceForAll: '288',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.74',
                          priceForAll: '370',
                        },
                      ],
                    },
                    {
                      id: 'soft-touch',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.98',
                          priceForAll: '29.8',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.74',
                          priceForAll: '87',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.48',
                          priceForAll: '148',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.22',
                          priceForAll: '366',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1',
                          priceForAll: '500',
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 'liner-true',
                  lamination: [
                    {
                      id: 'without',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '0.66',
                          priceForAll: '6.6',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '0.52',
                          priceForAll: '26',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '0.45',
                          priceForAll: '45',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.42',
                          priceForAll: '126',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.38',
                          priceForAll: '190',
                        },
                      ],
                    },
                    {
                      id: 'matte-glossy',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '0.8',
                          priceForAll: '8',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '0.62',
                          priceForAll: '31',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '0.56',
                          priceForAll: '56',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.51',
                          priceForAll: '153',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.48',
                          priceForAll: '240',
                        },
                      ],
                    },
                    {
                      id: 'soft-touch',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '1.18',
                          priceForAll: '11.8',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '0.92',
                          priceForAll: '46',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '0.84',
                          priceForAll: '84',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.77',
                          priceForAll: '231',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.74',
                          priceForAll: '370',
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 'liner&laser-true',
                  lamination: [
                    {
                      id: 'without',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.66',
                          priceForAll: '26.6',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.52',
                          priceForAll: '76',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.25',
                          priceForAll: '125',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.02',
                          priceForAll: '306',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.78',
                          priceForAll: '390',
                        },
                      ],
                    },
                    {
                      id: 'matte-glossy',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.8',
                          priceForAll: '28',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.62',
                          priceForAll: '81',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.36',
                          priceForAll: '136',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.11',
                          priceForAll: '333',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.88',
                          priceForAll: '440',
                        },
                      ],
                    },
                    {
                      id: 'soft-touch',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '3.18',
                          priceForAll: '31.8',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.92',
                          priceForAll: '96',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.64',
                          priceForAll: '164',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.37',
                          priceForAll: '411',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.14',
                          priceForAll: '570',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'design-paper',
          size: [
            {
              id: '200x200',
              attributes: [
                {
                  id: 'liner&laser-false',
                  lamination: [
                    {
                      id: 'without',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '5.6',
                          priceForAll: '56',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '2.75',
                          priceForAll: '137.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '2.43',
                          priceForAll: '243',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '2.18',
                          priceForAll: '654',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '2.13',
                          priceForAll: '1065',
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 'laser-true',
                  lamination: [
                    {
                      id: 'without',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '7.6',
                          priceForAll: '76',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '3.75',
                          priceForAll: '187.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '3.23',
                          priceForAll: '323',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '2.78',
                          priceForAll: '834',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '2.53',
                          priceForAll: '1265',
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 'liner-true',
                  lamination: [
                    {
                      id: 'without',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '5.8',
                          priceForAll: '58',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '2.93',
                          priceForAll: '146.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '2.59',
                          priceForAll: '259',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '2.33',
                          priceForAll: '699',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '2.27',
                          priceForAll: '1135',
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 'liner&laser-true',
                  lamination: [
                    {
                      id: 'without',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '7.8',
                          priceForAll: '78',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '3.93',
                          priceForAll: '196.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '3.39',
                          priceForAll: '339',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '2.93',
                          priceForAll: '879',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '2.67',
                          priceForAll: '1335',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: '200x100',
              attributes: [
                {
                  id: 'liner&laser-false',
                  lamination: [
                    {
                      id: 'without',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '3.35',
                          priceForAll: '33.5',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.23',
                          priceForAll: '61.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '0.95',
                          priceForAll: '95',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.77',
                          priceForAll: '231',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.74',
                          priceForAll: '370',
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 'laser-true',
                  lamination: [
                    {
                      id: 'without',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '5.35',
                          priceForAll: '53.5',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '2.23',
                          priceForAll: '111.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.75',
                          priceForAll: '175',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.37',
                          priceForAll: '411',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.14',
                          priceForAll: '570',
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 'liner-true',
                  lamination: [
                    {
                      id: 'without',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '3.55',
                          priceForAll: '35.5',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.41',
                          priceForAll: '70.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.11',
                          priceForAll: '111',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.92',
                          priceForAll: '276',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.88',
                          priceForAll: '440',
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 'liner&laser-true',
                  lamination: [
                    {
                      id: 'without',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '5.55',
                          priceForAll: '55.5',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '2.41',
                          priceForAll: '120.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.91',
                          priceForAll: '191',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.52',
                          priceForAll: '456',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.28',
                          priceForAll: '640',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: '105x148',
              attributes: [
                {
                  id: 'liner&laser-false',
                  lamination: [
                    {
                      id: 'without',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '4.43',
                          priceForAll: '44.3',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.31',
                          priceForAll: '65.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '0.92',
                          priceForAll: '92',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.67',
                          priceForAll: '201',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.62',
                          priceForAll: '310',
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 'laser-true',
                  lamination: [
                    {
                      id: 'without',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '6.43',
                          priceForAll: '64.3',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '2.31',
                          priceForAll: '115.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.72',
                          priceForAll: '172',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.27',
                          priceForAll: '381',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.02',
                          priceForAll: '510',
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 'liner-true',
                  lamination: [
                    {
                      id: 'without',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '4.63',
                          priceForAll: '46.3',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.49',
                          priceForAll: '74.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.08',
                          priceForAll: '108',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.82',
                          priceForAll: '246',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.76',
                          priceForAll: '380',
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 'liner&laser-true',
                  lamination: [
                    {
                      id: 'without',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '6.63',
                          priceForAll: '66.3',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '2.49',
                          priceForAll: '124.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.88',
                          priceForAll: '188',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.42',
                          priceForAll: '426',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.16',
                          priceForAll: '580',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: '148x210',
              attributes: [
                {
                  id: 'liner&laser-false',
                  lamination: [
                    {
                      id: 'without',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '4.52',
                          priceForAll: '45.2',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.77',
                          priceForAll: '88.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.39',
                          priceForAll: '139',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.16',
                          priceForAll: '348',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.12',
                          priceForAll: '560',
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 'laser-true',
                  lamination: [
                    {
                      id: 'without',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '6.52',
                          priceForAll: '65.2',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '2.77',
                          priceForAll: '138.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '2.19',
                          priceForAll: '219',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.76',
                          priceForAll: '518',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.52',
                          priceForAll: '760',
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 'liner-true',
                  lamination: [
                    {
                      id: 'without',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '4.72',
                          priceForAll: '47.2',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.95',
                          priceForAll: '97.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.55',
                          priceForAll: '155',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.31',
                          priceForAll: '393',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.26',
                          priceForAll: '630',
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 'liner&laser-true',
                  lamination: [
                    {
                      id: 'without',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '6.72',
                          priceForAll: '67.2',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '2.95',
                          priceForAll: '147.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '2.35',
                          priceForAll: '235',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.91',
                          priceForAll: '573',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.66',
                          priceForAll: '830',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    // Упаковка
    {
      id: 'packs',
      view: [
        {
          id: 'paper',
          size: [
            {
              id: 'A4',
              weight: [
                {
                  id: '170',
                  grommet: [
                    {
                      id: 'false',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '10',
                          priceForAll: '100',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '5',
                          priceForAll: '250',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '4.86',
                          priceForAll: '486',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '4.1',
                          priceForAll: '1230',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '3.8',
                          priceForAll: '1900',
                        },
                      ],
                    },
                    {
                      id: 'true',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '11',
                          priceForAll: '110',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '6',
                          priceForAll: '300',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '5.86',
                          priceForAll: '586',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '5.1',
                          priceForAll: '1530',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '4.8',
                          priceForAll: '2400',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: 'A5',
              weight: [
                {
                  id: '170',
                  grommet: [
                    {
                      id: 'false',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '9',
                          priceForAll: '90',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '4.5',
                          priceForAll: '225',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '4.37',
                          priceForAll: '437',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '3.69',
                          priceForAll: '1107',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '3.42',
                          priceForAll: '1710',
                        },
                      ],
                    },
                    {
                      id: 'true',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '10',
                          priceForAll: '100',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '5.5',
                          priceForAll: '275',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '5.37',
                          priceForAll: '537',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '4.69',
                          priceForAll: '1407',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '4.42',
                          priceForAll: '2210',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'gift-box',
          view: [
            {
              id: 'home',
              circulations: [
                {
                  id: '10',
                  name: 'coins',
                  priceForSingle: '32',
                  priceForAll: '320',
                },
                {
                  id: '50',
                  name: 'coins',
                  priceForSingle: '31',
                  priceForAll: '1550',
                },
                {
                  id: '100',
                  name: 'coins',
                  priceForSingle: '30',
                  priceForAll: '3000',
                },
                {
                  id: '300',
                  name: 'coins',
                  priceForSingle: '29',
                  priceForAll: '8700',
                },
                {
                  id: '500',
                  name: 'coins',
                  priceForSingle: '28',
                  priceForAll: '14000',
                },
              ],
            },
            {
              id: 'mitten',
              circulations: [
                {
                  id: '10',
                  name: 'coins',
                  priceForSingle: '14',
                  priceForAll: '140',
                },
                {
                  id: '50',
                  name: 'coins',
                  priceForSingle: '13',
                  priceForAll: '650',
                },
                {
                  id: '100',
                  name: 'coins',
                  priceForSingle: '12',
                  priceForAll: '1200',
                },
                {
                  id: '300',
                  name: 'coins',
                  priceForSingle: '11',
                  priceForAll: '3300',
                },
                {
                  id: '500',
                  name: 'coins',
                  priceForSingle: '10',
                  priceForAll: '5000',
                },
              ],
            },
            {
              id: 'vine',
              circulations: [
                {
                  id: '10',
                  name: 'coins',
                  priceForSingle: '20',
                  priceForAll: '200',
                },
                {
                  id: '50',
                  name: 'coins',
                  priceForSingle: '19',
                  priceForAll: '950',
                },
                {
                  id: '100',
                  name: 'coins',
                  priceForSingle: '18',
                  priceForAll: '1800',
                },
                {
                  id: '300',
                  name: 'coins',
                  priceForSingle: '17',
                  priceForAll: '5100',
                },
                {
                  id: '500',
                  name: 'coins',
                  priceForSingle: '16',
                  priceForAll: '8000',
                },
              ],
            },
            {
              id: 'toys',
              circulations: [
                {
                  id: '10',
                  name: 'coins',
                  priceForSingle: '30',
                  priceForAll: '300',
                },
                {
                  id: '50',
                  name: 'coins',
                  priceForSingle: '29',
                  priceForAll: '1450',
                },
                {
                  id: '100',
                  name: 'coins',
                  priceForSingle: '28',
                  priceForAll: '2800',
                },
                {
                  id: '300',
                  name: 'coins',
                  priceForSingle: '27',
                  priceForAll: '8100',
                },
                {
                  id: '500',
                  name: 'coins',
                  priceForSingle: '26',
                  priceForAll: '13000',
                },
              ],
            },
          
          ],
        },
        {
          id: 'craft',
          size: [
            {
              id: '170x90x312',
              application: [
                {
                  id: '1+0',
                  stickerSize: [
                    {
                      id: '60x60',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.5',
                          priceForAll: '25',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.45',
                          priceForAll: '72.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.04',
                          priceForAll: '104',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.9',
                          priceForAll: '270',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.82',
                          priceForAll: '410',
                        },
                      ],
                    },
                    {
                      id: '80x80',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.52',
                          priceForAll: '25.2',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.62',
                          priceForAll: '81',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.17',
                          priceForAll: '117',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.02',
                          priceForAll: '306',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.92',
                          priceForAll: '460',
                        },
                      ],
                    },
                    {
                      id: '100x100',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.54',
                          priceForAll: '25.4',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.83',
                          priceForAll: '91.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.31',
                          priceForAll: '131',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.14',
                          priceForAll: '342',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.04',
                          priceForAll: '520',
                        },
                      ],
                    },
                    {
                      id: '100x160',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.66',
                          priceForAll: '26.6',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '2.19',
                          priceForAll: '109.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.57',
                          priceForAll: '157',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.36',
                          priceForAll: '408',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.24',
                          priceForAll: '620',
                        },
                      ],
                    },
                    {
                      id: '100x200',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.88',
                          priceForAll: '28.8',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '2.38',
                          priceForAll: '119',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.7',
                          priceForAll: '170',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.47',
                          priceForAll: '441',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.34',
                          priceForAll: '670',
                        },
                      ],
                    },
                    {
                      id: '160x260',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '4.1',
                          priceForAll: '41',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '3.68',
                          priceForAll: '184',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '2.63',
                          priceForAll: '263',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '2.29',
                          priceForAll: '687',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '2.08',
                          priceForAll: '1040',
                        },
                      ],
                    },
                  ],
                },
                {
                  id: '1+1',
                  stickerSize: [
                    {
                      id: '60x60',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.9',
                          priceForAll: '29',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.61',
                          priceForAll: '80.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.15',
                          priceForAll: '115',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.03',
                          priceForAll: '309',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.95',
                          priceForAll: '475',
                        },
                      ],
                    },
                    {
                      id: '80x80',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.92',
                          priceForAll: '29.2',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.94',
                          priceForAll: '97',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.38',
                          priceForAll: '138',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.23',
                          priceForAll: '369',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.14',
                          priceForAll: '570',
                        },
                      ],
                    },
                    {
                      id: '100x100',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '3.14',
                          priceForAll: '31.4',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '2.34',
                          priceForAll: '117',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.67',
                          priceForAll: '167',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.49',
                          priceForAll: '447',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.38',
                          priceForAll: '690',
                        },
                      ],
                    },
                    {
                      id: '100x160',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '3.26',
                          priceForAll: '32.6',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '3',
                          priceForAll: '150',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '2.14',
                          priceForAll: '214',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.91',
                          priceForAll: '573',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.77',
                          priceForAll: '885',
                        },
                      ],
                    },
                    {
                      id: '100x200',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '3.68',
                          priceForAll: '36.8',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '3.21',
                          priceForAll: '160.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '2.47',
                          priceForAll: '247',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '2.2',
                          priceForAll: '660',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '2.04',
                          priceForAll: '1020',
                        },
                      ],
                    },
                    {
                      id: '160x260',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '4.9',
                          priceForAll: '49',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '4.22',
                          priceForAll: '211',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '4.17',
                          priceForAll: '417',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '3.71',
                          priceForAll: '1113',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '3.45',
                          priceForAll: '1725',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: '220x120x250',
              application: [
                {
                  id: '1+0',
                  stickerSize: [
                    {
                      id: '60x60',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.32',
                          priceForAll: '23.2',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.18',
                          priceForAll: '59',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '0.85',
                          priceForAll: '85',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.74',
                          priceForAll: '222',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.67',
                          priceForAll: '335',
                        },
                      ],
                    },
                    {
                      id: '80x80',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.34',
                          priceForAll: '23.4',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.38',
                          priceForAll: '69',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '0.99',
                          priceForAll: '99',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.86',
                          priceForAll: '258',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.78',
                          priceForAll: '390',
                        },
                      ],
                    },
                    {
                      id: '100x100',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.36',
                          priceForAll: '23.6',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.58',
                          priceForAll: '79',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.13',
                          priceForAll: '113',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.98',
                          priceForAll: '294',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.89',
                          priceForAll: '445',
                        },
                      ],
                    },
                    {
                      id: '100x160',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.4',
                          priceForAll: '24',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.95',
                          priceForAll: '97.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.39',
                          priceForAll: '139',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.21',
                          priceForAll: '363',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.1',
                          priceForAll: '550',
                        },
                      ],
                    },
                    {
                      id: '100x200',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.5',
                          priceForAll: '25',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '2.17',
                          priceForAll: '108.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.54',
                          priceForAll: '154',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.34',
                          priceForAll: '402',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.22',
                          priceForAll: '610',
                        },
                      ],
                    },
                    {
                      id: '160x260',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '3.8',
                          priceForAll: '38',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '3.45',
                          priceForAll: '172.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '2.46',
                          priceForAll: '246',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '2.14',
                          priceForAll: '642',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.95',
                          priceForAll: '975',
                        },
                      ],
                    },
                  ],
                },
                {
                  id: '1+1',
                  stickerSize: [
                    {
                      id: '60x60',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.72',
                          priceForAll: '27.2',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.37',
                          priceForAll: '68.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '0.98',
                          priceForAll: '98',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.86',
                          priceForAll: '258',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.8',
                          priceForAll: '400',
                        },
                      ],
                    },
                    {
                      id: '80x80',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.74',
                          priceForAll: '27.4',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.79',
                          priceForAll: '89.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.21',
                          priceForAll: '121',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.08',
                          priceForAll: '324',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1',
                          priceForAll: '500',
                        },
                      ],
                    },
                    {
                      id: '100x100',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.96',
                          priceForAll: '29.6',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '2.07',
                          priceForAll: '103.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.48',
                          priceForAll: '148',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.32',
                          priceForAll: '396',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.22',
                          priceForAll: '610',
                        },
                      ],
                    },
                    {
                      id: '100x160',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '3',
                          priceForAll: '30',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '2.74',
                          priceForAll: '137',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.96',
                          priceForAll: '196',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.75',
                          priceForAll: '525',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.62',
                          priceForAll: '810',
                        },
                      ],
                    },
                    {
                      id: '100x200',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '3.3',
                          priceForAll: '33',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '2.98',
                          priceForAll: '149',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '2.3',
                          priceForAll: '230',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '2.05',
                          priceForAll: '615',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.9',
                          priceForAll: '950',
                        },
                      ],
                    },
                    {
                      id: '160x260',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '4.6',
                          priceForAll: '46',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '4.1',
                          priceForAll: '205',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '3.99',
                          priceForAll: '399',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '3.56',
                          priceForAll: '1068',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '3.3',
                          priceForAll: '1650',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: '260x150x350',
              application: [
                {
                  id: '1+0',
                  stickerSize: [
                    {
                      id: '60x60',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.39',
                          priceForAll: '23.9',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.27',
                          priceForAll: '63.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '0.92',
                          priceForAll: '92',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.79',
                          priceForAll: '237',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.72',
                          priceForAll: '360',
                        },
                      ],
                    },
                    {
                      id: '80x80',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.41',
                          priceForAll: '241',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.45',
                          priceForAll: '72.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.05',
                          priceForAll: '105',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.9',
                          priceForAll: '270',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.82',
                          priceForAll: '410',
                        },
                      ],
                    },
                    {
                      id: '100x100',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.43',
                          priceForAll: '24.3',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.65',
                          priceForAll: '82.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.17',
                          priceForAll: '117',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.02',
                          priceForAll: '360',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.93',
                          priceForAll: '465',
                        },
                      ],
                    },
                    {
                      id: '100x160',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.45',
                          priceForAll: '24.5',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '2',
                          priceForAll: '100',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.43',
                          priceForAll: '143',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.24',
                          priceForAll: '372',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.13',
                          priceForAll: '565',
                        },
                      ],
                    },
                    {
                      id: '100x200',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.54',
                          priceForAll: '25.4',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '2.2',
                          priceForAll: '110',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.59',
                          priceForAll: '159',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.39',
                          priceForAll: '417',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.26',
                          priceForAll: '630',
                        },
                      ],
                    },
                    {
                      id: '160x260',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '3.9',
                          priceForAll: '39',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '3.49',
                          priceForAll: '174.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '2.49',
                          priceForAll: '249',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '2.17',
                          priceForAll: '651',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.97',
                          priceForAll: '985',
                        },
                      ],
                    },
                  ],
                },
                {
                  id: '1+1',
                  stickerSize: [
                    {
                      id: '60x60',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.79',
                          priceForAll: '279',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.43',
                          priceForAll: '71.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.02',
                          priceForAll: '102',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '0.91',
                          priceForAll: '273',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.84',
                          priceForAll: '420',
                        },
                      ],
                    },
                    {
                      id: '80x80',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.81',
                          priceForAll: '28.1',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.83',
                          priceForAll: '91.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.24',
                          priceForAll: '124',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.1',
                          priceForAll: '330',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.02',
                          priceForAll: '510',
                        },
                      ],
                    },
                    {
                      id: '100x100',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '3.03',
                          priceForAll: '30.3',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '2.13',
                          priceForAll: '106.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.52',
                          priceForAll: '152',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.36',
                          priceForAll: '408',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.26',
                          priceForAll: '630',
                        },
                      ],
                    },
                    {
                      id: '100x160',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '3.05',
                          priceForAll: '30.5',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '2.8',
                          priceForAll: '140',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '2',
                          priceForAll: '200',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.79',
                          priceForAll: '537',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.66',
                          priceForAll: '830',
                        },
                      ],
                    },
                    {
                      id: '100x200',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '3.34',
                          priceForAll: '33.4',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '3.05',
                          priceForAll: '152.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '2.37',
                          priceForAll: '237',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '2.12',
                          priceForAll: '636',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.96',
                          priceForAll: '980',
                        },
                      ],
                    },
                    {
                      id: '160x260',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '4.7',
                          priceForAll: '47',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '4.16',
                          priceForAll: '208',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '4.04',
                          priceForAll: '404',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '3.6',
                          priceForAll: '1080',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '3.34',
                          priceForAll: '1670',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: '320x200x370',
              application: [
                {
                  id: '1+0',
                  stickerSize: [
                    {
                      id: '60x60',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.59',
                          priceForAll: '25.9',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.63',
                          priceForAll: '81.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.16',
                          priceForAll: '116',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.01',
                          priceForAll: '303',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '0.92',
                          priceForAll: '460',
                        },
                      ],
                    },
                    {
                      id: '80x80',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.61',
                          priceForAll: '26.1',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.77',
                          priceForAll: '88.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.26',
                          priceForAll: '126',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.1',
                          priceForAll: '330',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1',
                          priceForAll: '500',
                        },
                      ],
                    },
                    {
                      id: '100x100',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.63',
                          priceForAll: '26.3',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '2',
                          priceForAll: '100',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.43',
                          priceForAll: '143',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.24',
                          priceForAll: '372',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.13',
                          priceForAll: '565',
                        },
                      ],
                    },
                    {
                      id: '100x160',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.8',
                          priceForAll: '28',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '2.36',
                          priceForAll: '118',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.68',
                          priceForAll: '168',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.46',
                          priceForAll: '438',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.33',
                          priceForAll: '665',
                        },
                      ],
                    },
                    {
                      id: '100x200',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '3',
                          priceForAll: '30',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '2.58',
                          priceForAll: '129',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.85',
                          priceForAll: '185',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.61',
                          priceForAll: '483',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.46',
                          priceForAll: '730',
                        },
                      ],
                    },
                    {
                      id: '160x260',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '4.3',
                          priceForAll: '43',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '3.84',
                          priceForAll: '192',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '2.74',
                          priceForAll: '274',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '2.38',
                          priceForAll: '714',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '2.17',
                          priceForAll: '1085',
                        },
                      ],
                    },
                  ],
                },
                {
                  id: '1+1',
                  stickerSize: [
                    {
                      id: '60x60',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '2.99',
                          priceForAll: '29.9',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '1.76',
                          priceForAll: '88',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.26',
                          priceForAll: '126',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.12',
                          priceForAll: '336',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.04',
                          priceForAll: '520',
                        },
                      ],
                    },
                    {
                      id: '80x80',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '3.01',
                          priceForAll: '30.1',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '2.1',
                          priceForAll: '105',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.49',
                          priceForAll: '149',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.32',
                          priceForAll: '396',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.23',
                          priceForAll: '615',
                        },
                      ],
                    },
                    {
                      id: '100x100',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '3.23',
                          priceForAll: '323',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '2.48',
                          priceForAll: '124',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '1.77',
                          priceForAll: '177',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '1.58',
                          priceForAll: '474',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.46',
                          priceForAll: '730',
                        },
                      ],
                    },
                    {
                      id: '100x160',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '3.4',
                          priceForAll: '34',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '3.15',
                          priceForAll: '157.5',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '2.25',
                          priceForAll: '225',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '2',
                          priceForAll: '600',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '1.86',
                          priceForAll: '930',
                        },
                      ],
                    },
                    {
                      id: '100x200',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '3.8',
                          priceForAll: '38',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '3.3',
                          priceForAll: '165',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '2.56',
                          priceForAll: '256',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '2.3',
                          priceForAll: '690',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '2.12',
                          priceForAll: '1060',
                        },
                      ],
                    },
                    {
                      id: '160x260',
                      circulations: [
                        {
                          id: '10',
                          name: 'coins',
                          priceForSingle: '5.1',
                          priceForAll: '51',
                        },
                        {
                          id: '50',
                          name: 'coins',
                          priceForSingle: '4.3',
                          priceForAll: '215',
                        },
                        {
                          id: '100',
                          name: 'coins',
                          priceForSingle: '4.21',
                          priceForAll: '421',
                        },
                        {
                          id: '300',
                          name: 'coins',
                          priceForSingle: '3.82',
                          priceForAll: '1146',
                        },
                        {
                          id: '500',
                          name: 'coins',
                          priceForSingle: '3.54',
                          priceForAll: '1770',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    // Бизнес-набор
    // {},
  ],
}

const pricesSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {},
})

export const pricesActions = pricesSlice.actions
export const pricesReducer = pricesSlice.reducer
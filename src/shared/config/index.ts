export const DICTIONARY_WORDS = 'dictionaryWords'

export const dictionary = [
  {
    id: 1,
    originalText: 'behind the scenes',
    transcription: '[bɪˈhaɪnd ðə siːnz]',
    translatedText: 'за кулисами'
  },
  {
    id: 2,
    originalText: 'terms',
    transcription: '[tɜːrmz]',
    translatedText: 'условия, термины'
  },
  {
    id: 3,
    originalText: 'empower',
    transcription: '[ɪmˈpaʊər]',
    translatedText: 'давать полномочия, уполномочивать'
  },
  {
    id: 4,
    originalText: 'exactly',
    transcription: '[ɪɡˈzæktli]',
    translatedText: 'точно'
  },
  {
    id: 5,
    originalText: 'recap',
    transcription: '[ˈriːkæp]',
    translatedText: 'резюме, краткое изложение'
  },
  {
    id: 6,
    originalText: 'assume',
    transcription: '[əˈsuːm]',
    translatedText: 'предполагать'
  },
  {
    id: 7,
    originalText: 'below',
    transcription: '[bɪˈloʊ]',
    translatedText: 'ниже, нижеприведенный'
  },
  {
    id: 8,
    originalText: 'confuse',
    transcription: '[kənˈfjuːz]',
    translatedText: 'смущать'
  },
  {
    id: 9,
    originalText: 'attempt',
    transcription: '[əˈtɛmpt]',
    translatedText: 'попытка, пытаться'
  },
  {
    id: 10,
    originalText: 'derived',
    transcription: '[dɪˈraɪvd]',
    translatedText: 'производный, полученный'
  },
  {
    id: 11,
    originalText: 'bunch',
    transcription: '[bʌntʃ]',
    translatedText: 'пучок, группа'
  },
  {
    id: 12,
    originalText: 'meaningless',
    transcription: '[ˈmiːnlɪs]',
    translatedText: 'бессмысленный'
  },
  {
    id: 13,
    originalText: 'parsing',
    transcription: '[ˈpɑːrsɪŋ]',
    translatedText: 'анализ, синтаксический анализ'
  },
  {
    id: 14,
    originalText: 'particularly',
    transcription: '[pɑːrˈtɪkjələrli]',
    translatedText: 'особенно, в частности'
  },
  {
    id: 15,
    originalText: 'accounted',
    transcription: '[əˈkaʊntɪd]',
    translatedText: 'учитывается, учитывается'
  },
  {
    id: 16,
    originalText: 'angle',
    transcription: '[ˈæŋɡəl]',
    translatedText: 'угол'
  },
  {
    id: 17,
    originalText: 'certain',
    transcription: '[ˈsɜːrtən]',
    translatedText: 'определенный, уверенный'
  },
  {
    id: 18,
    originalText: 'distinct',
    transcription: '[dɪˈstɪŋkt]',
    translatedText: 'различный, отличающийся'
  },
  {
    id: 19,
    originalText: 'separate',
    transcription: '[ˈsɛpəreɪt]',
    translatedText: 'отдельный, раздельный'
  },
  {
    id: 20,
    originalText: 'Upon',
    transcription: '[əˈpɒn]',
    translatedText: 'по, на основе'
  },
  {
    id: 21,
    originalText: 'Establishes',
    transcription: '[ɪˈstæblɪʃɪz]',
    translatedText: 'устанавливает, создает'
  },
]

export const verbFormsData = [
  {
    forms_id: 'simple-forms',
    forms_name: 'Simple Forms',
    items: [
      {
        id: 1,
        name: 'Present Simple',
        example: 'Пример: Я читаю книгу.',
        forms_id: 'simple-forms',
        description: 'Время Present Simple обозначает действие в настоящем в широком смысле слова. Оно употребляется для обозначения обычных, регулярно повторяющихся или постоянных действий, например, когда мы говорим о чьих-либо привычках, режиме дня, расписании и т. д., т. е. Present Simple обозначает действия, которые происходят в настоящее время, но не привязаны именно к моменту речи.',
        examples: [
          {
            id: 1,
            original: "The meeting starts at 6 o'clock",
            translated: 'Собрание начинается в шесть часов'
          },
          {
            id: 2,
            original: "I live in London",
            translated: 'Я живу в Лондоне'
          },
        ],
        formation: [
          {
            id: 1,
            name: "Утвердительные предложения",
            list: [
              {
                lid: 1,
                rule: 'I / you / we / they  play'
              },
              {
                lid: 2,
                rule: 'He / she / it plays'
              },
            ]
          },
          {
            id: 2,
            name: "Вопросительные предложения",
            list: [
              {
                lid: 1,
                rule: 'Do i / you / we / they play ?'
              },
              {
                lid: 2,
                rule: 'Does he / she / it play ?'
              },
            ]
          },
          {
            id: 3,
            name: "Отрицательные предложения",
            list: [
              {
                lid: 1,
                rule: "I / you / we / they don't play"
              },
              {
                lid: 2,
                rule: "He / she / it doesn't play"
              },
            ]
          },
        ]
      },
      {
        id: 2,
        name: 'Past Simple',
        example: 'Пример: Я прочитал книгу вчера.',
        forms_id: 'simple-forms',
        description: 'Past Simple используется для обозначения прошлых событий и действий, которые завершились в прошлом. Оно часто связано со словами и выражениями, указывающими на определенный момент времени в прошлом.',
        examples: [
          {
            id: 1,
            original: "I visited Paris last summer",
            translated: 'Я посетил Париж прошлым летом'
          },
          {
            id: 2,
            original: "She watched a movie yesterday",
            translated: 'Она посмотрела фильм вчера'
          },
        ],
        formation: [
          {
            id: 1,
            name: "Утвердительные предложения",
            list: [
              {
                lid: 1,
                rule: 'I / you / he / she / it / we / they  played'
              },
            ]
          },
          {
            id: 2,
            name: "Вопросительные предложения",
            list: [
              {
                lid: 1,
                rule: 'Did I / you / he / she / it / we / they  play ?'
              },
            ]
          },
          {
            id: 3,
            name: "Отрицательные предложения",
            list: [
              {
                lid: 1,
                rule: "I / you / he / she / it / we / they  didn't play"
              },
            ]
          },
        ]
      },
      {
        id: 3,
        name: 'Future Simple',
        example: 'Пример: Я прочитаю книгу завтра.',
        forms_id: 'simple-forms',
        description: 'Future Simple используется для выражения действий, которые произойдут в будущем и не зависят от момента речи. Оно часто сопровождается временными наречиями, указывающими на будущее время, такими как "завтра", "послезавтра", "в следующем месяце" и т. д.',
        examples: [
          {
            id: 1,
            original: "I will call you tomorrow",
            translated: 'Я позвоню тебе завтра'
          },
          {
            id: 2,
            original: "She is going to travel next summer",
            translated: 'Она собирается путешествовать летом'
          },
        ],
        formation: [
          {
            id: 1,
            name: "Утвердительные предложения",
            list: [
              {
                lid: 1,
                rule: 'I / you / he / she / it / we / they  will play'
              },
            ]
          },
          {
            id: 2,
            name: "Вопросительные предложения",
            list: [
              {
                lid: 1,
                rule: 'Will I / you / he / she / it / we / they  play ?'
              },
            ]
          },
          {
            id: 3,
            name: "Отрицательные предложения",
            list: [
              {
                lid: 1,
                rule: "I / you / he / she / it / we / they  will not play"
              },
            ]
          },
        ]
      },
    ]
  },
  {
    forms_id: 'continous-forms',
    forms_name: 'Continous Forms',
    items: [
      {
        id: 4,
        name: 'Present Continuous',
        example: 'Пример: Я читаю книгу прямо сейчас.',
        forms_id: 'continous-forms',
        description: 'Present Continuous используется для обозначения действий, которые происходят в момент речи, в данный момент времени. Оно обычно сопровождается временными наречиями, указывающими на текущий момент, такими как "сейчас", "в данный момент", "прямо сейчас".',
        examples: [
          {
            id: 1,
            original: "She is reading a book now.",
            translated: 'Она читает книгу прямо сейчас.'
          },
          {
            id: 2,
            original: "They are studying English at the moment.",
            translated: 'Они изучают английский в данный момент.'
          },
        ],
        formation: [
          {
            id: 1,
            name: 'Утвердительные предложения',
            list: [
              {
                lid: 1,
                rule: 'I am reading.'
              },
              {
                lid: 2,
                rule: 'He is studying.'
              },
            ]
          },
          {
            id: 2,
            name: 'Вопросительные предложения',
            list: [
              {
                lid: 1,
                rule: 'Are you reading?'
              },
              {
                lid: 2,
                rule: 'Is he studying?'
              },
            ]
          },
          {
            id: 3,
            name: 'Отрицательные предложения',
            list: [
              {
                lid: 1,
                rule: "I am not reading."
              },
              {
                lid: 2,
                rule: "He is not studying."
              },
            ]
          }
        ]
      },
      {
        id: 5,
        name: 'Past Continuous',
        example: 'Пример: Я читал книгу вчера в это время.',
        forms_id: 'continous-forms',
        description: 'Past Continuous используется для обозначения действий, которые происходили в определенный момент в прошлом или продолжались в прошлом. Оно обычно сопровождается временными наречиями, указывающими на прошлое время, такими как "вчера", "в это время".',
        examples: [
          {
            id: 1,
            original: "I was reading a book at 6 o'clock yesterday.",
            translated: 'Я читал книгу в шесть часов вчера.'
          },
          {
            id: 2,
            original: "She was studying English last night.",
            translated: 'Она изучала английский вчера вечером.'
          },
        ],
        formation: [
          {
            id: 1,
            name: 'Утвердительные предложения',
            list: [
              {
                lid: 1,
                rule: 'I / he / she / it  was reading.'
              },
              {
                lid: 2,
                rule: 'You / we / they  were reading.'
              },
            ]
          },
          {
            id: 2,
            name: 'Вопросительные предложения',
            list: [
              {
                lid: 1,
                rule: 'Was I / he / she / it  reading ?'
              },
              {
                lid: 2,
                rule: 'Were you / we / they  reading ?'
              },
            ]
          },
          {
            id: 3,
            name: 'Отрицательные предложения',
            list: [
              {
                lid: 1,
                rule: "I / he / she / it  was not reading."
              },
              {
                lid: 2,
                rule: "You / we / they  were not reading."
              },
            ]
          }
        ]
      },
      {
        id: 6,
        name: 'Future Continuous',
        example: 'Пример: Я буду читать книгу завтра в это время.',
        forms_id: 'continous-forms',
        description: 'Future Continuous используется для обозначения действий, которые будут происходить в определенный момент в будущем. Оно обычно сопровождается временными наречиями, указывающими на будущее время, такими как "завтра", "в это время".',
        examples: [
          {
            id: 1,
            original: "I will be reading a book at 7 o'clock tomorrow.",
            translated: 'Я буду читать книгу завтра в семь часов.'
          },
          {
            id: 2,
            original: "She will be studying English next week.",
            translated: 'Она будет изучать английский на следующей неделе.'
          },
        ],
        formation: [
          {
            id: 1,
            name: 'Утвердительные предложения',
            list: [
              {
                lid: 1,
                rule: 'I / he / she / it  will be reading.'
              },
              {
                lid: 2,
                rule: 'You / we / they  will be reading.'
              },
            ]
          },
          {
            id: 2,
            name: 'Вопросительные предложения',
            list: [
              {
                lid: 1,
                rule: 'Will I / he / she / it  be reading ?'
              },
              {
                lid: 2,
                rule: 'Will you / we / they  be reading ?'
              },
            ]
          },
          {
            id: 3,
            name: 'Отрицательные предложения',
            list: [
              {
                lid: 1,
                rule: "I / he / she / it  will not be reading."
              },
              {
                lid: 2,
                rule: "You / we / they  will not be reading."
              },
            ]
          }
        ]
      },
    ]
  },
  {
    forms_id: 'perfect-forms',
    forms_name: 'Perfect Forms',
    items: [
      {
        id: 7,
        name: 'Present Perfect',
        example: 'Пример: Я уже прочитал книгу.',
        forms_id: 'perfect-forms',
        description: 'Present Perfect используется для обозначения действий, которые произошли в прошлом, но имеют связь с настоящим временем. Это время подразумевает, что действие было завершено к определенному моменту времени в прошлом, и его результаты ощущаются в настоящем.',
        examples: [
          {
            id: 1,
            original: "I have visited Paris.",
            translated: 'Я уже посетил Париж.'
          },
          {
            id: 2,
            original: "She has learned English.",
            translated: 'Она выучила английский.'
          },
        ],
        formation: [
          {
            id: 1,
            name: 'Утвердительные предложения',
            list: [
              {
                lid: 1,
                rule: 'I / you / he / she / it / we / they  have played'
              },
            ]
          },
          {
            id: 2,
            name: 'Вопросительные предложения',
            list: [
              {
                lid: 1,
                rule: 'Have I / you / he / she / it / we / they  played ?'
              },
            ]
          },
          {
            id: 3,
            name: 'Отрицательные предложения',
            list: [
              {
                lid: 1,
                rule: "I / you / he / she / it / we / they  have not played"
              },
            ]
          },
        ]
      },
      {
        id: 8,
        name: 'Past Perfect',
        example: 'Пример: Я прочитал книгу до этого момента.',
        forms_id: 'perfect-forms',
        description: 'Past Perfect используется для обозначения действий, которые произошли в прошлом и завершились до определенного момента в прошлом. Оно устанавливает временную последовательность действий в прошлом.',
        examples: [
          {
            id: 1,
            original: "I had read the book before the movie started.",
            translated: 'Я прочитал книгу до начала фильма.'
          },
          {
            id: 2,
            original: "She had already left when I arrived.",
            translated: 'Она уже ушла, когда я пришел.'
          },
        ],
        formation: [
          {
            id: 1,
            name: 'Утвердительные предложения',
            list: [
              {
                lid: 1,
                rule: 'I / he / she / it  had played'
              },
              {
                lid: 2,
                rule: 'You / we / they  had played'
              },
            ]
          },
          {
            id: 2,
            name: 'Вопросительные предложения',
            list: [
              {
                lid: 1,
                rule: 'Had I / he / she / it  played ?'
              },
              {
                lid: 2,
                rule: 'Had you / we / they  played ?'
              },
            ]
          },
          {
            id: 3,
            name: 'Отрицательные предложения',
            list: [
              {
                lid: 1,
                rule: "I / he / she / it  had not played"
              },
              {
                lid: 2,
                rule: "You / we / they  had not played"
              },
            ]
          },
        ]
      },
      {
        id: 9,
        name: 'Future Perfect',
        example: 'Пример: Я прочитаю книгу до этого момента.',
        forms_id: 'perfect-forms',
        description: 'Future Perfect используется для обозначения действий, которые будут завершены к определенному моменту в будущем. Это время устанавливает временную последовательность действий в будущем.',
        examples: [
          {
            id: 1,
            original: "I will have finished the project by next week.",
            translated: 'Я закончу проект к следующей неделе.'
          },
          {
            id: 2,
            original: "She will have graduated by the time you visit.",
            translated: 'Она закончит учебу к моменту вашего визита.'
          },
        ],
        formation: [
          {
            id: 1,
            name: 'Утвердительные предложения',
            list: [
              {
                lid: 1,
                rule: 'I / he / she / it  will have played'
              },
              {
                lid: 2,
                rule: 'You / we / they  will have played'
              },
            ]
          },
          {
            id: 2,
            name: 'Вопросительные предложения',
            list: [
              {
                lid: 1,
                rule: 'Will I / he / she / it  have played ?'
              },
              {
                lid: 2,
                rule: 'Will you / we / they  have played ?'
              },
            ]
          },
          {
            id: 3,
            name: 'Отрицательные предложения',
            list: [
              {
                lid: 1,
                rule: "I / he / she / it  will not have played"
              },
              {
                lid: 2,
                rule: "You / we / they  will not have played"
              },
            ]
          },
        ]
      },
    ]
  },
  {
    forms_id: 'perfect-continuous-forms',
    forms_name: 'Perfect Continuous Forms',
    items: [
      {
        id: 10,
        name: 'Present Perfect Continuous',
        example: 'Пример: Я учусь английскому уже два часа.',
        forms_id: 'perfect-continuous-forms',
        description: 'Present Perfect Continuous используется для обозначения действий, которые начались в прошлом и продолжаются в настоящем, подчеркивая продолжительность этого действия. Это время также устанавливает связь между прошлым и настоящим.',
        examples: [
          {
            id: 1,
            original: "I have been studying English for two hours.",
            translated: 'Я учусь английскому уже два часа.'
          },
          {
            id: 2,
            original: "She has been working on the project all day.",
            translated: 'Она работает над проектом весь день.'
          },
        ],
        formation: [
          {
            id: 1,
            name: 'Утвердительные предложения',
            list: [
              {
                lid: 1,
                rule: 'I / you / he / she / it / we / they  have been playing'
              },
            ]
          },
          {
            id: 2,
            name: 'Вопросительные предложения',
            list: [
              {
                lid: 1,
                rule: 'Have I / you / he / she / it / we / they  been playing ?'
              },
            ]
          },
          {
            id: 3,
            name: 'Отрицательные предложения',
            list: [
              {
                lid: 1,
                rule: "I / you / he / she / it / we / they  have not been playing"
              },
            ]
          }
        ]
      },
      {
        id: 11,
        name: 'Past Perfect Continuous',
        example: 'Пример: Я учил английский всю прошлую неделю.',
        forms_id: 'perfect-continuous-forms',
        description: 'Past Perfect Continuous используется для обозначения действий, которые начались в прошлом и продолжались до определенного момента в прошлом. Это время устанавливает продолжительность и временную последовательность действий в прошлом.',
        examples: [
          {
            id: 1,
            original: "I had been studying English all last week.",
            translated: 'Я учил английский всю прошлую неделю.'
          },
          {
            id: 2,
            original: "She had been working on the project for several hours before she left.",
            translated: 'Она работала над проектом несколько часов, прежде чем ушла.'
          },
        ],
        formation: [
          {
            id: 1,
            name: 'Утвердительные предложения',
            list: [
              {
                lid: 1,
                rule: 'I / he / she / it  had been playing'
              },
              {
                lid: 2,
                rule: 'You / we / they  had been playing'
              },
            ]
          },
          {
            id: 2,
            name: 'Вопросительные предложения',
            list: [
              {
                lid: 1,
                rule: 'Had I / he / she / it  been playing ?'
              },
              {
                lid: 2,
                rule: 'Had you / we / they  been playing ?'
              },
            ]
          },
          {
            id: 3,
            name: 'Отрицательные предложения',
            list: [
              {
                lid: 1,
                rule: "I / he / she / it  had not been playing"
              },
              {
                lid: 2,
                rule: "You / we / they  had not been playing"
              },
            ]
          }
        ]
      },
      {
        id: 12,
        name: 'Future Perfect Continuous',
        example: 'Пример: Я буду учить английский уже три часа к моменту вашего прихода.',
        forms_id: 'perfect-continuous-forms',
        description: 'Future Perfect Continuous используется для обозначения действий, которые будут продолжаться до определенного момента в будущем. Это время устанавливает продолжительность действий и их завершение к будущему моменту.',
        examples: [
          {
            id: 1,
            original: "I will have been studying English for three hours by the time you arrive.",
            translated: 'Я буду учить английский уже три часа к моменту вашего прихода.'
          },
          {
            id: 2,
            original: "She will have been working on the project for a month when it's completed.",
            translated: 'Она будет работать над проектом месяц, когда он будет завершен.'
          },
        ],
        formation: [
          {
            id: 1,
            name: 'Утвердительные предложения',
            list: [
              {
                lid: 1,
                rule: 'I / he / she / it  will have been playing'
              },
              {
                lid: 2,
                rule: 'You / we / they  will have been playing'
              },
            ]
          },
          {
            id: 2,
            name: 'Вопросительные предложения',
            list: [
              {
                lid: 1,
                rule: 'Will I / he / she / it  have been playing ?'
              },
              {
                lid: 2,
                rule: 'Will you / we / they  have been playing ?'
              },
            ]
          },
          {
            id: 3,
            name: 'Отрицательные предложения',
            list: [
              {
                lid: 1,
                rule: "I / he / she / it  will not have been playing"
              },
              {
                lid: 2,
                rule: "You / we / they  will not have been playing"
              },
            ]
          }
        ]
      },
    ]
  }
  
];
const quot=['Когда речь идёт о бюджете, каждый желает попасть в рай, но никто не желает умирать',
'Жан Кретьен',
'Нарушая свой долг, тем самым нарушают свои права.',
'Жан-Жак Руссо',
'Чтобы зарабатывать вдвое больше, нужно вдвое больше работать. Не вижу, в чём же тут выгода.',
'Янина Ипохорская',
'Когда сводите свой баланс, помните, что почти каждая строка в нем будет рассказывать какую-то историю, будьте готовы задать себе немало вопросов.',
'Карл Ричардс',
'Нельзя рассуждать о бюджете, не зная приблизительно цифры его доходов и расходов',
'Теодор Герцль',
'Дорога цивилизации вымощена квитанциями об уплате налогов.',
'Эндрю Маккензи',
'Никто не принимает советы, но все принимают деньги; стало быть, деньги лучше советов.',
'Джонатан Свифт',
'Единственным критерием справедливости государственных решений в области экономической политики является их соответствие "общественному договору" или гражданскому согласию.',
'Кнут Виксель',
'На рынке люди меняют яблоки на апельсины, а в политике – соглашаются платить налоги в обмен на блага, необходимые всем и каждому: от местной пожарной охраны до суда.',
'Дж. Бъюкенен',
'Если ты знаешь, как тратить меньше, чем получаешь, значит у тебя есть философский камень.',
'Бенджамин Франклин',
'Никаких "государственных денег" нет - есть только деньги налогоплательщика.',
'Уильям Уэлд',
'Каждый расчет нас немножко превращает в калькулятор.',
'Ишхан Геворгян',
'Если бы то, чего человеку достаточно, удовлетворило его, он был бы вполне обеспечен.',
'Луцилий Гай',
'Люди работают не только ради денег, и если вы пытаетесь мотивировать людей, деньги не самый эффективный инструмент.',
'Акио Морита',
'Только два стимула заставляют людей работать: жажда заработной платы и боязнь ее потерять.',
'Генри Форд',
'Царедворцы кричат: "Давайте нам, не считая", а народ: "Считайте то, что мы вам даем".',
'Мария Лещинская',
'С возрастом желание заработать переходит в желание сэкономить.',
'Михаил Жванецкий',
'Наши математические затруднения Бога не беспокоят. Он интегрирует эмпирически.',
'Альберт Эйнштейн',
'Человек может долго жить на деньги, которых ждет.',
'Уильям Фолкнер',
'Достаток в старости - продление молодости.',
'Чарльз Лэм',
'Ваш ум программируется. И если вы не будете программировать его сами, кто-то будет делать это за вас.',
'Джереми Хаммонд',
'Мы должны признать очевидное: понимают лишь те, кто хочет понять.',
'Бернар Вербер',
'Иметь низкое мнение о себе ― это не скромность. Это саморазрушение.',
'Бобби Соммер',
'Дойдя до конца, люди смеются над страхами, мучившими их в начале.',
'Пауло Коэльо',
'Минимализм заключается не в отсутствии чего-либо. Это просто идеальное количество чего-либо.',
'Николаc Берроуз',
'Кто хочет удержать – тот теряет. Кто готов с улыбкой отпустить – того стараются удержать.',
'Эрих Мария Ремарк',
'Если вы думаете, что уже достигли просветления, попробуйте просто провести неделю со своей семьей.',
'Баба Рам Дасс',
'Оставаться наедине со своими мыслями — весьма опасное занятие... но очень полезное!',
'Джонни Депп',
'Ум достаточно быстро адаптируется ко всему, кроме скуки.',
'Эмили Дикинсон', 
'И не могу сказать, что не могу жить без тебя — поскольку я живу.',
'Иосиф Бродский',
'Глубокие цитаты великих людей ― прекрасная пища для размышлений. Эти короткие цитаты понравятся всем. И тем, кто ищет покоя, и тем, кто ищет борьбы в жизни; тем, кто ищет удовольствий от жизни, и тем, кто ищет понимания себя, своих детей и всех, и всего, что находится вокруг нас.',
'С глубоким смыслом цитаты',
'Телевидение никогда не будет формой искусства, потому что оно потворствует ожиданиям зрителей.',
'Михаэль Ханеке',
'Самый хороший способ испортить отношения — это начать выяснять их.',
'Уинстон Черчилль',
'Я заметил, что даже люди, которые утверждают, что все предопределено и что мы не можем ничего изменить, всегда смотрят по сторонам, переходя дорогу.',
'Стивен Хокинг',
'Жизнь ― это не то, что вы получаете. Это то, что вы делаете с полученным.',
'Стефани Перкинс',
'Дайте человеку всё, чего он желает, и в ту же минуту он почувствует, что это всё ― не есть всё.',
'Иммануил Кант',
'Невозможно стать образованными, если читать только то, что нам нравится.',
'Жозеф Жубер',
'Иногда, если очень хочется съесть печенье, которое нельзя - я задумываюсь. На что больше воля Божья? Чтобы я был счастлив? Или чтобы ел только то, что положено? ... И я им печенье.',
'Далай-лама XIV',
'Вечно я говорю "очень приятно с вами познакомиться", когда мне ничуть не приятно. Но если хочешь жить с людьми, приходится говорить всякое.',
'Джером Дэвид Сэлинджер',
'Что-то все время сдерживало нас и делало слабее. Оказалось, что это мы сами.',
'Роберт Фрост',
'Чтобы выигрывать, прежде всего, нужно играть.',
'Альберт Эйнштейн',
'Даже самые умные слова не могут научить. Учит нас только жизнь. Но учит через наше восприятие и ощущение наполненности этих самых слов содержанием. Поэтому, возможно, короткие глубокие цитаты великих людей помогут вам принять правильное решение в той или иной жизненной ситуации. Даже, если сначала эти высказывания покажутся вам простыми и примитивными. ',
'Глубокие и короткие цитаты со смыслом',
'Проблема этого мира в том, что глупцы и фанатики слишком уверены в себе, а умные люди полны сомнений.',
'Бертран Рассел',
'Если вы хотите сделать что-то большое в один прекрасный день, помните: один прекрасный день - это сегодня.',
'Джордж Лукас',
'Главное — не научиться читать. Гораздо важнее научиться сомневаться в прочитанном.',
'Джордж Карлин',
'Маяк не носится по всему побережью в поисках лодки, кого можно спасти. Он просто стоит на одном месте и светит.',
'Энн Ламотт',
'Ничто так не выдает человека, как то, над чем он смеётся.',
'Иоганн Вольфганг фон Гёте',
'Все, что должно быть сказано, уже было сказано. Но поскольку никто не слушал, все должно быть повторено снова.',
'Андре Жид',
'Не ищите злой умысел там, где все можно объяснить глупостью.',
'Наполеон I Бонапарт ',
'Я сделал страшный грех из всех возможных грехов. Я не был счастлив.',
'Хорхе Луис Борхес',
'Будьте заняты. Это самое дешевое лекарство на земле — и одно из самых эффективных.',
'Дейл Карнеги ',
'Достигни того, чего хочешь, или придется довольствоваться тем, что имеешь.',
'Джордж Бернард Шоу'];
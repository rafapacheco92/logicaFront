import React from 'react';
import Post from '../PostContent/Post';
import './Feed.css';
import Sidebar from '../SideBar/SideBar';

function Feed() {
  const posts = [
    {
      id: 1,
      user: 'RODRIGO',
      title: 'SUPERB COQUETEL: Um drink de cerveja amanteigada.',
      description:
        'Aqui em casa a gente tem a tradição de celebramos tudo o que é ótimo sobre o exagero brasileiro em um único dia, geralmente assistindo um Masterchef. principalmente na final. A comida é boa. Este ano, decidi que precisávamos de um coquetel edição especial para acompanhar, apresentando o Superb!',
      ingredients: [
        '1 colher de sopa de geleia de goiaba',
        '1 colher de sopa de açúcar',
        '60 ml de água',
        '60 ml de conhaque',
        '30 ml de rum',
        '½ limão',
        '2 fatias de laranja',
      ],
      recipe:
        'Adicione todas as bebidas alcoólicas em seu copo de coquetel com gelo. Agite. Coloque um magnífico pedaço de gelo em seu copo. Despeje seu coquetel sobre ele. Decore com suas cerejas ao marasquino.',
    },
    {
      id: 2,
      user: 'RAFAEL',
      title: 'CHOCOTEL',
      description:
        'Curiosidade sobre mim, eu amo chocolate. Eu adoro em todas as formas. Quando posso tê-lo em forma de coquetel, fico muito feliz. Há até um boato (ou lenda) de que toda vez que vou à Vegas (algo que tento fazer pelo menos uma vez por ano), gosto de começar todos os dias com um Chocolate Martini. E o que dizer do fim da noite? E quando é hora de com algo da família do bourbon? Temos o Coquetel de Chocolate, Xarope de Ácer e amendoas para isso!',
      ingredients: [
        '60 ml de bourbon infusionado com pecan',
        '10 ml de xarope de maple',
        '22 ml de crème de cacao amargo',
        'Bitters de chocolate',
      ],
      recipe:
        'Faça seu bourbon infusionado com pecan. Adicione o bourbon, o xarope, o crème de cacao amargo e os bitters em um shaker com gelo. Agite. Despeje o conteúdo do shaker em um old fashioned com um grande pedaço de gelo. Decore com uma fatia de pecan. Despeje uma parte da stout suavemente por cima.',
    },
    {
      id: 3,
      user: 'JOÃO',
      title: 'LUCID FLY: Um enganoso drink de cerveja amanteigada.',
      description:
        'Uma antiga amiga minha, me disse que ela e um amigo tinham uma banda e que eles eram bons, eu sabia que eles seriam bons. Essa foi minha introdução ao Lucid Fly e (tambores) eles finalmente estão lançando seu primeiro álbum de estúdio! Doug pediu se poderíamos criar um coquetel para o álbum deles, e quem sou eu para dizer não? Apresentando o coquetel Lucid Fly!',
      ingredients: [
        '30 ml de bourbon',
        '30 ml de Cherry Herring',
        '60 ml de Tang',
        '1/4 colher de chá de absinto',
        'Uma pitada de Cherry Bitters',
        'Rodelas de laranja',
      ],
      recipe:
        'Coloque todos os ingredientes no copo Old Fashioned. Adicione cubos de gelo e mexa bem. Decore com rodelas de laranja e sirva.',
    },
    {
      id: 4,
      user: 'RODRIGO',
      title: 'VALENTINE AMARGO: Para um dia dos namorados amargo.',
      description:
        'Dia dos Namorados, ah, que época mágica do ano. Tudo é cor-de-rosa, fofo e cheio de sentimentos melosos e "bleh". Claro, vou comemorar, mas é mais um momento para ficar em casa. Não precisa sair, fazer um grande alarde ou mostrar pra todo mundo.',
      ingredients: [
        '45 ml de vodka',
        '90 ml de suco de tomate',
        '15 ml de suco de limão fresco',
        '2-3 dashes de molho inglês (Worcestershire sauce)',
        '2-3 dashes de molho de pimenta Tabasco (ou a gosto)',
        'Sal e pimenta a gosto',
        'Gelo',
        'Fatia de limão para decorar',
        'Talo de aipo para decorar (opcional)',
      ],
      recipe:
        'Coloque todas as bebidas alcoólicas e o suco de limão em uma coqueteleira. Adicione gelo. Agite. Despeje e coe em seu copo. Adicione uma etapa de coagem para evitar pedaços de gelo. A menos que você prefira, nesse caso, não coe. Decore com um morango. Agora, fique amargo. Ou seja feliz. De qualquer maneira, é um coquetel excelente.',
    },
    {
      id: 5,
      user: 'RAFAEL',
      title: 'HORCHATA',
      description:
        'Se você não conhece horchata, é um elixir mágico de sabor - pense nela como um pudim de arroz, mas em forma de bebida e mais leve. É refrescante. Sabendo disso, era apenas questão de tempo para eu enfrentar essa bebida mais incrível em forma de álcool, vamos começar com o Horchata!',
      ingredients: [
        '120 ml de leite de amêndoas',
        '15 ml de licor de amêndoas',
        '15 ml de xarope simples de canela',
        '60 ml de tequila añejo',
      ],
      recipe:
        'Adicione todos os ingredientes em um shaker com gelo. Adivinha? Agite. Encha o copo com gelo. Coe sua horchata azedada no copo. Decore com um pouco de canela.',
    },
    {
      id: 6,
      user: 'RAFAEL',
      title: 'BLACK VELVET',
      description:
        'Ah, St. Patrick day - sempre fui fã. Desde a comida até a música e a desculpa para usar verde, tudo é mágico. Caramba, isso foi antes mesmo de eu perceber que era um ótimo dia para tomar uma caneca (ou três) de cerveja. No entanto, às vezes você quer mais do que apenas uma caneca solitária, talvez até algo que não seja verde. Para esses momentos, aproveite um Black Velvet!',
      ingredients: [
        '1 parte de stout (realmente, Guinness)',
        '1 parte de cidra (seca)',
      ],
      recipe:
        'Abra sua cidra. Abra sua stout. Despeje uma parte da cidra em seu copo pilsner. Pegue uma colher e coloque-a logo acima da cidra. Despeje uma parte da stout suavemente por cima.',
    },
  ];

  return (
    <div className="feed">
      <div>
        <Sidebar />
      </div>
      <div id="feedContent">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Feed;

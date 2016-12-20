/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(){
    var galeria = angular.module('galeriaModule',[]);
    
    galeria.controller('GalleryController', function(){
        this.produtos = produtosDaLoja; 
    });
    

    var produtosDaLoja = [
        {
            id:1,
            nome: "Enxoval",
            thumbnailURI: "img/produto1.jpg",
            descricao:"Enxovais para vários formatos de berços",
            imagens: [
                "img/produto1.jpg",
                "img/produto2.jpg",
                "img/produto3.jpg"
            ]
        },
        {
            id:2,
            nome: "Enxoval 2",
            thumbnailURI: "img/produto2.jpg",
            descricao:"Enxovais para testes de Angular também",
            imagens: [
                "img/produto2.jpg",
                "img/produto3.jpg",
                "img/produto4.jpg"
            ]
        }
    ];
})();
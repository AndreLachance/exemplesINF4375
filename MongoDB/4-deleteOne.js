// Copyright 2013 Jacques Berger.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var mongo = require("mongodb");

// Note : Cet exemple ne contient aucune gestion d'erreur.

var server = new mongo.Server("localhost", 27017);
var db = new mongo.Db("inf4375", server, {safe:true});

db.open(function (err, db) {
  db.collection("disco", function (err, collection) {

    // Supprimons The Eye de King Diamond. Le deuxième paramètre au callback
    // indique le nombre d'objets qui ont été supprimés.
    collection.deleteOne({artist: "King Diamond", title: "The Eye"}, function (err, result) {
      if (result.deletedCount > 0) {
        var plural = (result.deletedCount > 1) ? "s" : "";
        console.log("Album" + plural + " supprimé" + plural);
      }
      db.close();
    });
  });
});

# Réponses aux questions

## Question 1.1
Le dataProvider est l'adaptateur entre React-Admin et l'API REST.
Il traduit les actions (liste, création, modification, suppression)
en requêtes HTTP vers le serveur.
=représente à l'aide des requête http, son rôle c'est la liasion avec API REST 

## Question 1.2
Une requête GET est envoyée vers http://localhost:3002/employees
avec des paramètres de pagination et de tri.

## Question 2.1
rowClick="edit" redirige vers le formulaire de modification
quand on clique sur une ligne du tableau.

## Question 2.2
Avec perPage=2, seulement 2 employés s'affichent par page
et la pagination s'adapte automatiquement.

## Question 3.1
Un message d'erreur s'affiche sous le champ indiquant
qu'il est obligatoire. La soumission est bloquée.

## Question 3.2
Un message d'erreur s'affiche indiquant que la valeur
minimale est 1500€. La soumission est bloquée.

## Question 4.1
La méthode HTTP PUT est utilisée lors de la sauvegarde
d'une modification.

## Question 4.2
useRecordContext() est disponible uniquement à l'intérieur
d'un composant enfant de Edit/Show. Il retourne undefined
si l'enregistrement n'est pas encore chargé.

## Question 5.1
SimpleShowLayout affiche tous les champs dans une seule
colonne. TabbedShowLayout organise les champs en onglets
pour une meilleure organisation quand il y a beaucoup de champs.

(function(){
	(function(ns) {
		ns.data = {
			skills: [
				{
					id: 1
					, title: 'HTML'
					, description: 'Principale langue du web, le HTML est constituté de texte encadré de balises. '
					, rankDescriptions: [
						'Savoir construire une page web simple'
						, 'Savoir creer des liens, faire une page multi-colonnes, travailler avec des champs de formulaires et balises medias.'
					]
	                , links: [
	                    {
	                        label: 'HTML.net Tutorials'
                            , url: 'http://www.html.net/tutorials/html/'
	                    }
		                , {
		                    label: 'Sublime Text et Atom'
			                , url: 'http://lesbricodeurs.fr/articles/Sublime-Text-vs-Atom/'
		                }
		            	, {
		                    label: 'Notre prochaine session Web 101'
			                , url: 'http://lesbricodeurs.fr/evenements/'
		                }
	                ]
					, maxPoints: 2
					, stats: [
						{
							title: 'Webmarketing'
							, value: 1
						}
						,{
							title: 'Sens du visuel'
							, value: 1
						}
						,{
							title: 'Reseau'
							, value: 1
						}
					]
				},

				{
					id: 2
					, title: 'CSS'
					, dependsOn: [1]
	                , links: [
		                {
		                    label: 'Tutoriaux CSS'
			                , url: 'http://www.htmldog.com/guides/css/'
		                }
	                    , {
	                        label: 'Puis je utiliser X? Le support des navigateurs'
                            , url: 'http://caniuse.com/#cats=CSS'
	                    }
	                ]
					, maxPoints: 2
					, stats: [
						{
							title: 'Sens du visuel'
							, value: 3
						}
					]
	                , rankDescriptions: [
                        'Etre familier avec les notions de bases de la mise en forme CSS et le concept de box.'
                        , 'Vous connaissez les media queries et le responsive design  pour vous adapter à tous les supports'
	                ]
                    , description: 'Cascading Style Sheets (CSS) est un langage pour changer visuellement les pages webs.  Le CSS vise des élements du HTML pour modifier la couleur, la taille de la police...'
					, talents: ['Stylé']
				},
				{
					id: 3
					, title: 'CSS avancé'
					, dependsOn: [2]
	                , links: [
		                {
		                    label: 'Sass vs. LESS'
			                , url: 'http://css-tricks.com/sass-vs-less/'
		                }
	                    , {
	                        label: 'LESS'
                            , url: 'http://lesscss.org/'
	                    }
	                    , {
	                        label: 'Sass'
                            , url: 'http://sass-lang.com/'
	                    }
	                    , {
	                        label: 'Stylus'
                            , url: 'http://learnboost.github.io/stylus/'
	                    }
	                ]
					, maxPoints: 2
	                , rankDescriptions: [
                        'Vous êtes à l\'aise avec les varialbesl et le nesting'
                        , 'Vous pouvez utiliser des outils avancés comme les mix-ins et parfois écrire les votres.'
	                ]
                    , description: 'Les preprocesseurs comme LESS et SASS permettent d\'ajouter des fonctionnalités au CSS comme les fonctions, les variables..'
					, stats: [
						{
							title: 'Sens du visuel'
							, value: 2
						}
						, {
							title: 'Design'
							, value: 1
						}
					]
				},
				{
					id: 4
					, title: 'Maitrise du web design'
					, dependsOn: [2]
                    , description: 'Vous pouvez réaliser vos idées en les transformant en page HTML avec le CSS adapté'
					, stats: [
						{
							title: 'Sens du visuel'
							, value: 10
						}
					]
				},
				{
					id: 5
					, title: 'Effets jQuery'
					, dependsOn: [4]
	                , links: [
		                {
		                    label: 'Codecademy jQuery'
			                , url: 'http://www.codecademy.com/tracks/jquery'
		                }
	                    , {
	                        label: 'jQuery : Manipulation'
                            , url: 'http://api.jquery.com/category/manipulation/'
	                    }
	                    , {
	                        label: 'jQuery : Effects'
                            , url: 'http://api.jquery.com/category/effects/'
	                    }
	                ]
					, maxPoints: 3
	                , rankDescriptions: [
                        'Vous êtes familier avec la manipulation du DOM (Document Object Model) - modifier des valeurs, contenus .. '
                        , 'Vous êtes familier avec l\'ajout d\'une animation à une page web' 
                        , 'Vous êtes familier la création et l\'ajout d\'effets originaux à une page'
	                ]
                    , description: 'jQuery fourni des techniques et méthodes pour la manipulation des éléments d\'une page web, coté client'
					, talents: ['Effet Wow']
					, stats: [
						{
							title: 'Sens du visuel'
							, value: 2
						}
						, {
							title: 'Design'
							, value: 1
						}
					]
				},

				{
					id: 6
					, title: 'Référencement (SEO)'
					, dependsOn: [1]
	                , links: [
		                {
		                    label: 'Search Engine Optimization (Google)'
			                , url: 'https://support.google.com/webmasters/answer/35291'
		                }
	                    , {
	                        label: 'Webmaster Tools (Google)'
                            , url: 'http://www.google.com/webmasters/tools/'
	                    }
	                    , {
	                        label: 'Bing - Webmaster Tools'
                            , url: 'http://www.bing.com/toolbox/webmaster'
	                    }
	                ]
                    , description: 'Processus pour changer le classement et la visibilité d\'une page dans les résultats des moteurs de recherche'
					, stats: [
						{
							title: 'Webmarketing'
							, value: 2
						}
						, {
							title: 'Gestion'
							, value: 1
						}
					]
				},
				{
					id: 7
					, title: 'Analytics'
					, dependsOn: [6]
	                , links: [
		                {
		                    label: '10 SEO Analysis Tools You Should Be Using'
			                , url: 'http://www.webgnomes.org/blog/10-seo-analysis-tools/'
		                }
	                    , {
	                        label: 'Configuring SEO data in Analytics (Google)'
                            , url: 'https://support.google.com/analytics/answer/1308621?hl=en'
	                    }
	                    , {
	                        label: 'Using the SEO Reports (Google)'
                            , url: 'http://www.bing.com/toolbox/webmaster'
	                    }
	                    , {
	                        label: 'Bing - SEO Analyzer'
                            , url: 'http://www.bing.com/toolbox/seo-analyzer'
	                    }
	                ]
                    , description: 'Analytics fournit des informations sur la performance d\'une page et le parcours utilisateur'
					, stats: [
						{
							title: 'Webmarketing'
							, value: 1
						}
						, {
							title: 'Gestion'
							, value: 2
						}
					]
					, talents: ['Attentif']
				},

				{
					id: 8
					, title: 'Javascript'
					, dependsOn: [1]
	                , links: [
		                {
		                    label: 'JavaScript Tutorial'
			                , url: 'http://www.htmldog.com/guides/javascript/'
		                }
	                    , {
	                        label: 'Codecademy JavaScript'
                            , url: 'http://www.codecademy.com/tracks/javascript'
	                    }
	                    , {
	                        label: 'List of Videos for Beginner JavaScript'
                            , url: 'http://thenewboston.org/list.php?cat=10'
	                    }
	                    , {
	                    	label: 'Douglas Crockford on Javascript'
	                    	, url: 'http://javascript.crockford.com/'
	                    }
	                ]
                    , description: 'Javascript le langage executé principalement coté client. Il peut aussi bien modifier des éléments visuels de la page que faire des appels serveur pour charger de nouvelles informations'
					, stats: [
						{
							title: 'Design'
							, value: 3
						}
					]
				},
				{
					id: 9
					, title: 'JS bibliothèques & Frameworks'
					, dependsOn: [8]
					, links: [
	                    {
	                        label: 'Rejoignez nous les lundi pour étudier AngularJS!'
                            , url: 'http://www.meetup.com/fr-FR/Design-et-technologie-pour-projets-citoyens/'
	                    },
	                ]
					, maxPoints: 2
	                , rankDescriptions: [
                        'Vous utilisez des bibliothèques comme jQuery, MooTools, Prototype, Dojo, et YUI pour accellerer votre travail'
                        , 'Vous utilisez des Frameworks comme Ember.js, AngularJS, and Backbone.js pour créer des fonctionnalités complexes.'
	                ]
                    , description: 'Une fois que vous êtes à l\'aise avec le Javascript, il y a une multitude de Frameworks a étudier pour transformer vos pages en véritables applications.'
					, stats: [
						{
							title: 'Design'
							, value: 2
						}
						, {
							title: 'Gestion'
							, value: 1
						}
					]
					, talents: ['Malin']
				},
				{
					id: 10
					, title: 'Maîtrise du développement Frontend'
					, dependsOn: [9]  
					, stats: [
						{
							title: 'Design'
							, value: 10
						}
					]
				},

				{
					id: 11
					, title: 'Programmation serveur'
					, dependsOn: [1]
	                , links: [
                        {
	                        label: 'Server-side scripting Wiki'
                            , url: 'http://en.wikipedia.org/wiki/Server-side_scripting'
	                    }
	                ]
                    , description: 'Developper du code qui s\'execute coté serveur.'
					, stats: [
						{
							title: 'Reseau'
							, value: 3
						}
					]
				},
				{
					id: 12
					, title: 'Frameworks serveur'
					, dependsOn: [11]
	                , links: [
                        {
                            label: 'Comparison of web application frameworks'
                            , url: 'http://en.wikipedia.org/wiki/Comparison_of_web_application_frameworks'
                        }
	                    , {
				            label: 'Web development - server side coding'
                            , url: 'http://en.wikipedia.org/wiki/Web_development#Server_side_coding'
                        }
	                ]
                    , description: 'These are software frameworks and collection of packages or modules that allow developers to write applications or services without having to handle the overhead of common activities and lower level details, such as session management, database access, etc.'
					, stats: [
						{
							title: 'Reseau'
							, value: 2
						}
						, {
							title: 'Gestion'
							, value: 1
						}
					]
					, talents: ['Musclé']
				},

				{
					id: 13
					, title: 'Configuration de bases de données'
					//, dependsOn: [1]
	                , links: [
		                {
		                    label: 'w3schools.com SQL Tutorial'
			                , url: 'http://www.w3schools.com/sql/'
		                }                    
	                    ,{
				            label: 'SQLZOO Interactive SQL Tutorial'
                            , url: 'http://sqlzoo.net/wiki/'
	                    }                    
	                    ,{
	                        label: 'Database Normalization Wiki'
                            , url: 'https://en.wikipedia.org/wiki/Database_normalization'
	                    }
	                ]
					, maxPoints: 2
	                , rankDescriptions: [
                        'You understand how to setup tables.'
                        , 'You understand how relational databases organize data.'
	                ]
                    , description: 'Databases are powerful engines for storing, organizing, and retrieving data.  There is a wide variety of database platforms to choose from.  The most widely used database language is Structured Query Language (SQL).  Properly architecting your data will facilitate your site&rsquo;s server-side programming.'
					, stats: [
						{
							title: 'Reseau'
							, value: 3
						}
					]
				},
				{
					id: 14
					, title: 'Gestion avancée de bases de données'
					, dependsOn: [13]
	                , links: [
	                    {
	                        label: 'Stored Procedure - Wiki'
                            , url: 'http://en.wikipedia.org/wiki/Stored_procedure'
	                    }
		                , {
		                    label: 'User-defined function Wiki'
			                , url: 'http://en.wikipedia.org/wiki/User_defined_function'
		                }
	                    , {
	                        label: 'Database Tuning Wiki'
                            , url: 'http://en.wikipedia.org/wiki/Database_tuning'
	                    }
	                    , {
	                        label: 'Performance Monitoring and Tuning How-to Topics (SQL Server)'
                            , url: 'http://technet.microsoft.com/en-us/library/ms187830(v=sql.105).aspx'
	                    }
	                    , {
	                        label: 'Sql Server Performance Tuning Tips'
                            , url: 'http://www.mssqltips.com/sql-server-tip-category/9/performance-tuning/'
	                    }
	                    , {
	                        label: 'Oracle database Performance Tuning FAQ'
                            , url: 'http://www.orafaq.com/wiki/Oracle_database_Performance_Tuning_FAQ'
	                    }
	                ]
					, maxPoints: 2
	                , rankDescriptions: [
                        'You write stored procedures and user-defined functions for more efficient querying.'
                        , 'You can detect causes of performance deficiencies and fine tune a database like a rock star.'
	                ]
                    , description: 'Besides creating basic tables and relating data, databases allow for the creation of stored procedures, sets of SQL statements that are stored in the database, and user-defined functions (UDFs) , functions that can be used in SQL statements.  Just architecting the database is not enough.  The database also needs to be optimized or tuned to increase performance.'
					, stats: [
						{
							title: 'Reseau'
							, value: 2
						}
						, {
							title: 'Design'
							, value: 1
						}
					]
					, talents: ['Super Sac à dos']
				},

				{
					id: 15
					, title: 'Maitrise du développement serveur'
					, dependsOn: [12, 14]
                    , description: 'You are capable of architecting and building an application\'s backend to efficiently store and retrieve data.'
					, stats: [
						{
							title: 'Reseau'
							, value: 10
						}
					]
				},
				{
					id: 16
					, title: 'Authentication et Authorisations'
					, dependsOn: [15]
	                , links: [
	                    {
	                        label: 'ASP.NET authentication and authorization - CodeProject'
                            , url: 'http://www.codeproject.com/Articles/98950/ASP-NET-authentication-and-authorization'
	                    }
		                ,{
		                    label: 'OpenID Wiki (authentication)'
			                , url: 'http://en.wikipedia.org/wiki/OpenID'
		                }
	                    , {
	                        label: 'OAuth Community'
                            , url: 'http://oauth.net/'
	                    }
	                    , {
	                        label: 'ASP.NET Authorization'
                            , url: 'http://msdn.microsoft.com/en-us/library/wce3kxhd(v=vs.100).aspx'
	                    }
	                ]
                    , description: 'Authentication is the process determining whether someone or something is who or what it is declared to be. Authorization is the process of determining if a user is allowed to perform an action or has access to a resource.'
					, stats: [
						{
							title: 'Admin'
							, value: 5
						}
					]
					, talents: ['Chercheur de vérité']
				},
				{
					id: 17
					, title: 'AJAX & APIs'
					, dependsOn: [10, 15]
	                , links: [
	                    {
	                        label: 'AJAX (programming) Wiki'
                            , url: 'http://en.wikipedia.org/wiki/Ajax_(programming)'
	                    }
		                ,{
		                    label: 'List of Videos for AJAX'
			                , url: 'http://thenewboston.org/list.php?cat=61'
		                }
		                ,{
		                    label: 'Ajax: The Official Microsoft ASP.NET Site'
			                , url: 'http://www.asp.net/ajax'
		                }
	                    , {
	                        label: 'Web Service Wiki'
                            , url: 'http://en.wikipedia.org/wiki/Web_service'
	                    }
	                    , {
	                        label: 'Representational state transfer (REST) Wiki'
                            , url: 'http://en.wikipedia.org/wiki/Representational_state_transfer'
	                    }
                    ]
                    , description: 'Technology exists to allow separate systems to communicate between each other in various ways as well as allowing interfaces to be more intractive.  These include the use of Asynchronous JavaScript and XML (AJAX), usually on the client-side, to communicate with an external system.  Other technologies, such as web services, are used to setup end-points for allowing communication with an external system.'
					, stats: [
						{
							title: 'Reseau'
							, value: 1
						}
						,{
							title: 'Design'
							, value: 1
						}
						,{
							title: 'Webmarketing'
							, value: 1
						}
					]
					, talents: ['Tisseur']
				},

				{
					id: 18
					, title: 'Découverte utilisateur'
					, maxPoints: 2
					, rankDescriptions: [
						'Vous savez poser les bonnes questions, et utiliser des croquis pour confirmer vos idées'
						, 'Vous utilisez des techniques avancées comme les parcours utilisateurs pour mener les conversations avec des parties prenantes.'
					]
	                , links: [
	                 	{ 
	                 		label: 'The anatomy of an experience map'
	                 		, url: 'http://www.adaptivepath.com/ideas/the-anatomy-of-an-experience-map'
	                 	}
	                ]
                    , description: 'Avant de concevoir quoi que ce soit, il faut prendre le temps de comprendre le besoin du client et de l\'utilisateur final'
                    , stats: [
						{
							title: 'Gestion'
							, value: 2
						}
						,{
							title: 'Sens du visuel'
							, value: 1
						}
					]
					, talents: ['Télépathie']
				},
				{
					id: 19
					, title: 'Design graphique'
					, maxPoints: 2
					, rankDescriptions: [
						'You can create a balanced, complementary layout with a clear message.'
						, 'You understand how to create a strikingly unique design, which supports traditional design values as well as your underlying message.'
					]
					, dependsOn: [18]
	                , links: [
	                    {
	                        label: 'Graphic Design Wiki'
                            , url: 'http://en.wikipedia.org/wiki/Graphic_design'
	                    }
		                ,{
		                    label: 'Behance'
			                , url: 'http://www.behance.net/'
		                }
	                    , {
	                        label: 'User experience design Wiki'
                            , url: 'http://en.wikipedia.org/wiki/User_experience_design'
	                    }
		                ,{
		                    label: 'Awwwards'
			                , url: 'http://www.awwwards.com/'
		                }
	                ]
                    , description: 'Graphic design is about aesthetics and usability. Good designs are inviting and easy to understand, by solid use of color, typography, balance, hierarchy and white space.'
					, stats: [
						{
							title: 'Sens du visuel'
							, value: 3
						}
					]
					, talents: ['Artiste']
				},
				{
					id: 20
					, title: 'Outils de design graphique'
					, dependsOn: [19]
	                , links: [
                        {
	                        label: '100 Top Tools for Graphic Designers | Graphic Design Classes'
                            , url: 'http://graphicdesignclasses.net/design-tools/'
	                    }
	                ]
                    , description: 'Software such as Photoshop and devices like drawing tablets are used to create layouts, work with type, touch-up photos, and other activities to add professional polish to your designs.'
					, stats: [
						{
							title: 'Sens du visuel'
							, value: 2
						}
						,{
							title: 'Webmarketing'
							, value: 1
						}
					]
				},
				{
					id: 21
					, title: 'Prototypes'
					, dependsOn: [18]
	                , links: [
		                {
		                    label: 'Design Better And Faster With Rapid Prototyping'
			                , url: 'http://www.smashingmagazine.com/2010/06/16/design-better-faster-with-rapid-prototyping/'
		                }
	                    , {
	                        label: '16 Design Tools for Prototyping and Wireframing'
                            , url: 'http://www.sitepoint.com/tools-prototyping-wireframing/'
	                    }
	                ]
                    , description: 'Modeling a new design without building all the underlying functionality is a fast and efficient way to convey ideas, test a new concept, and identify problems you didn\'t anticipate.'
					, stats: [
						{
							title: 'Gestion'
							, value: 1
						}
						,{
							title: 'Webmarketing'
							, value: 2
						}
					]
					, talents: ['Incantateur']
				},
				{
					id: 22
					, title: 'Maîtrise de l\'expérience utilisateur'
					, dependsOn: [19, 21]
                    , description: 'You are capable of converting project requirements to an attractive design that promotes a pleasant user experience.'
					, stats: [
						{
							title: 'Gestion'
							, value: 1
						}
						,{
							title: 'Sens du visuel'
							, value: 2
						}
					]
				},
				{
					id: 23
					, title: 'Tests utilisateur'
					, dependsOn: [22]
	                , links: [
		                {
		                    label: 'My big list of 24 Web Site Usability Testing Tools'
			                , url: 'http://www.usefulusability.com/24-usability-testing-tools/'
		                }
	                    , {
	                        label: 'Usability Testing Wiki'
                            , url: 'http://en.wikipedia.org/wiki/Usability_testing'
	                    }
	                ]
                    , description: 'It is a technique, also known as usability testing, that is used to evaluate a website by testing it on users.'
                    , stats: [
						{
							title: 'Sens du visuel'
							, value: 1
						}
						,{
							title: 'Gestion'
							, value: 2
						}
					]
					, talents: ['Alchimiste']
				},

				{
					id: 24
					, title: 'Administration serveur'
	                , links: [
		                {
		                    label: 'Comparison of web server software Wiki'
			                , url: 'http://en.wikipedia.org/wiki/Comparison_of_web_server_software'
		                }
	                    , {
	                        label: 'Apache mod_rewrite - Apache HTTP Server'
                            , url: 'http://httpd.apache.org/docs/2.4/rewrite/'
	                    }
	                ]
					, maxPoints: 2
	                , rankDescriptions: [
                        'You are capable of setting up your application in a new environment.'
                        , 'Vous êtes familier avec server-side URL rewriting tools like mod_rewrite.'
	                ]
                    , description: 'Even the simplest web applications will require a server to run them.  There are several popular and fully-featured web servers to choose from, though your application\'s server-side programming language may limit your options.  Learning to manage and configure your web server will help you keep your site up and running smoothly.'
                    , stats: [
						{
							title: 'Admin'
							, value: 3
						}
					]
					, talents: ['Grand Intendant']
				},
				{
					id: 25
					, title: 'Déploiement'
					, dependsOn: [24]
	                , links: [
		                {
		                    label: 'SSL Certificate Installation'
			                , url: 'http://www.sslshopper.com/ssl-certificate-installation.html'
		                }
	                    , {
	                        label: 'Minimize payload size - Google Developers'
                            , url: 'https://developers.google.com/speed/docs/best-practices/payload'
	                    }
	                    , {
	                        label: 'Parallelize downloads across hostnames - Google Developers'
                            , url: 'https://developers.google.com/speed/docs/best-practices/rtt#ParallelizeDownloads'
	                    }
	                ]
					, maxPoints: 2
	                , rankDescriptions: [
                        'You minify your public-facing files and serve compressed files to save bandwidth and improve your site&raquo;s speed.'
                        , 'You secure sensitive traffic over HTTPS using an SSL certificate.'
	                ]
                    , description: 'Before sharing your application with the world, follow the best practices for security and performance on the server.'
                    , stats: [
						{
							title: 'Admin'
							, value: 2
						}
						,{
							title: 'Design'
							, value: 1
						}
					]
					, talents: ['Téléporteur']
				},

				{
					id: 26
					, title: 'Maître du développement web'
					, dependsOn: [4, 5, 10, 15, 22, 25]
	                , links: [
		                {
		                    label: 'Web Development Wiki'
			                , url: 'http://en.wikipedia.org/wiki/Web_development'
		                }
	                ]
                    , description: 'This refers to designing, creating, and maintaining a website.'
					, stats: [
						{
							title: 'Sens du visuel'
							, value: 3
						}
						,{
							title: 'Design'
							, value: 3
						}
						,{
							title: 'Admin'
							, value: 3
						}
						,{
							title: 'Webmarketing'
							, value: 3
						}
						,{
							title: 'Reseau'
							, value: 3
						}
						,{
							title: 'Gestion'
							, value: 3
						}
					]
					, talents: ['Demidieu']
				}

			]
		}
	})(namespace('tft.dnd'));
})();
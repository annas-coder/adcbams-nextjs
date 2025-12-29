
var formexist = document.getElementById('searchform');
if(formexist !=null){
	  document.getElementById('searchform').addEventListener('submit', function(event) {
	  event.preventDefault(); // Prevent default form submission

	  // Get form field values
	  var querystr = document.querySelector('input[name="stq"]').value;
	  

	  // Add data to query string
	  var queryString = '?stq=' + encodeURIComponent(querystr);
	let htmlLang = document.documentElement.lang.toLowerCase();
	  // Modify the form's action attribute
	  this.action = "/"+ htmlLang +'/search.aspx' + queryString;

	  // Submit the form
	  this.submit();
	});
}


$("#searchicon").click(function () {
		let queryTxt = $("#stq").val();
		 let htmlLang = document.documentElement.lang.toLowerCase();
		
		if(queryTxt !="" && queryTxt !=''){	
				var queryString = '?stq=' + encodeURIComponent(queryTxt);		
				location.href="/"+ htmlLang +'/search.aspx' + queryString;				
			}		 
		 
	});

(function ($) {
    var queryParser = function (a) {
        var i, p, b = {};
        if (a === "") {
            return {};
        }
        for (i = 0; i < a.length; i += 1) {
            p = a[i].split('=');
            if (p.length === 2) {
                b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
            }
        }
        return b;
    };
    $.queryParams = function () {
        return queryParser(window.location.search.substr(1).split('&'));
    };
    $.hashParams = function () {
        return queryParser(window.location.hash.substr(1).split('&'));
    };
    var submitSearch;
    var queryString = "";
    function pagination(c, m) {
        var current = c,
            last = m,
            delta = 2,
            left = current - delta,
            right = current + delta + 1,
            range = [],
            rangeWithDots = [],
            l;
        for (var i = 1; i <= last; i++) {
            if (i == 1 || i == last || i >= left && i < right) {
                range.push(i);
            }
        }
        for (var i = 0; i < range.length; i++) {
            if (l) {
                if (range[i] - l === 2) {
                    rangeWithDots.push(l + 1);
                } else if (range[i] - l !== 1) {
                    rangeWithDots.push('...');
                }
            }
            rangeWithDots.push(range[i]);
            l = range[i];
        }
        return rangeWithDots;
    }

    function generatePaginations() {
		$(".c-pagination").css("display","block");
        $("#__totalOffer").text(total_result_count);
        if(document.documentElement.lang.toLowerCase() =="ar"){
			$("#searchCount").text(total_result_count + " النتائج");
		}else{
        $("#searchCount").text(total_result_count + " results");
		}
		 
        var end = (((currrent_page - 1) * parseInt(_pagesize)) + parseInt(_pagesize));
        //if(end > total_result_count*5){
        //
        //}
        $("#__pagination").html("")
        $("#__pageCount").text(((currrent_page - 1) * parseInt(_pagesize)) + 1 + ' - ' + end + " ");
        var totalPages = Math.ceil(total_result_count / parseInt(_pagesize));

        var _p = pagination(currrent_page, totalPages)

        $("#__pagination").html('');
        for (var i = 0; i < _p.length; i++) {
            var _activeClass = '';
            if (_p[i] == currrent_page) {
                _activeClass = '-active';
            }
            $("#__pagination").append('  <li class="c-pagination-list__item"><a data-page="' + _p[i] + '"  class="c-pagination__link ' + _activeClass + '">' + _p[i] + '</a></li>')
        }
    }
    function registerEvent() {
        $('#__pagination > li > a').click(function () {
            var __this = $(this)

            var __page = __this.attr("data-page");
            if (!isNaN(__page)) {
                _page = __page;
                $("#searchResult").html(' ');

                var params = $.hashParams();
                if (!params)
                    params.stq = "";

                submitSearch(params.stq, {
                    page: params.stp
                });
            }

        })
		$('#_selectpagesize > span').click(function () {
            var __this = $(this)

            var __pagesize = __this.attr("data-pagesize");
            if (!isNaN(__pagesize)) {
                _pagesize = __pagesize;
                $("#searchResult").html(' ');

                var params = $.hashParams();
                if (!params)
                    params.stq = "";

                submitSearch(params.stq, {
                    page: params.stp
                });
            }

        })
    }
    $(".c-pagination__pagination-icons > a").click(function () {
        var _this = $(this);

        if (_this.attr("data-pagination-type") == "N") {
            if (_page - 1 <= 0) {

            } else {
                _page = parseInt(_page) - 1;
                var params = $.hashParams();
                if (!params)
                    params.stq = "";
                console.log(params);
                submitSearch(params.stq, {
                    page: params.stp
                });
            }
        } else {
            var totalPages = Math.ceil(total_result_count / _pagesize);
            _page = parseInt(_page);
            if (totalPages <= _page) {

            } else {
                _page = _page + 1;
                var params = $.hashParams();
                if (!params)
                    params.stq = "";
                console.log(params);
                submitSearch(params.stq, {
                    page: params.stp
                });

            }
        }
    })

    function visibleToDiv() {
        generatePaginations();
		
		   for (var i = 0; i < search.length; i++) {
            var __search = search[i];
            var sections = "";
			var content="";
			var pagetitle ="";
			var pageurl="";
			if (__search.hasOwnProperty("title")) {                     
                        pagetitle = (__search.title.raw != undefined)? __search.title.raw : __search.title;                    
                }
			if (__search.hasOwnProperty("url")) {                     
                        pageurl = (__search.url.raw != undefined)? __search.url.raw : __search.url;                    
                }
				
            if (__search.hasOwnProperty("headings")) {                 
				sections = __search.headings.raw[4] || "";
                content = __search.headings.raw[5] || __search.headings.raw[4];                
                
            }
			else if(__search.hasOwnProperty("htag")){
				sections = __search.htag[0] || "";
                content = __search.htag[1] || "";   
			}
			else {					 
                if (__search.hasOwnProperty("title")) {                     
                        sections = __search.title.raw;                    
                }				 
				if(__search.hasOwnProperty("meta_description")){
					content = meta_description.raw;
				}
            }

			
            var target = "";
			if (__search.url.raw ==undefined  &&__search.url.indexOf(".pdf") > 0) {
                sections = __search.title.raw || __search.title;
				sections = sections + "<span class='icon-pdf'></span>";
                __search.title = "PDF";
                content = "Click here to view pdf";
                target = "target='_blank'"
            }
            else if (__search.url.raw !=undefined && __search.url.raw.indexOf(".pdf") > 0) {
                sections = __search.title.raw;
				sections = sections + "<span class='icon-pdf'></span>";
                __search.title = "PDF";
                content = "Click here to view pdf";
                target = "target='_blank'"
            } 
            //__search.url = (__search.url.raw).replace("https://beta.adcb.com/", "https://adcb.com/");
            if((sections !== null && sections !== undefined && sections !=="") && (content !== null && content !== undefined && content !=="")){
              $("#searchResult").append('<div class="c-search-results-list__wrap"><div class="search-results-item"><div class="search-results-item__serial-number">' + pagetitle + '</div><div class="search-results-item__details"><h3 class="search-results-item__title" >' + sections + '</h3><a  style="text-decoration:none;color:#000;"   ' + target + '   href="' + pageurl + '"  class="search-results-item__summary">' + content + '</a></div></div></div>')
            }
        }
		if($("#searchResult").html().indexOf("c-search-results-list__wrap") != -1 && $("#searchResult").hasClass("hide")){
			$("#searchResult").removeClass("hide");
		}
        registerEvent();
    }		

    var search = [];
    var currrent_page = 0;
    var num_pages = 0;
    var total_result_count = 0;
    var _page = 1;
    var _pagesize =10;
	
    window.ElasticS = window.ElasticS || {};
    ElasticS.root_url = ElasticS.root_url || 'https://my-deployment-60665b.ent.southcentralus.azure.elastic-cloud.com';
    ElasticS.pingUrl = function (endpoint, callback) {
        var to = setTimeout(callback, 350);
        var img = new Image();
        img.onload = img.onerror = function () {
            clearTimeout(to);
            callback();
        };
        img.src = endpoint;
        return false;
    };
    ElasticS.pingSearchResultClick = function (engineKey, docId, callback) {
        var params = {
            t: new Date().getTime(),
            engine_key: engineKey,
            doc_id: docId,
            q: ElasticS.currentQuery
        };
		var htmlLang = document.documentElement.lang.toLowerCase();
		var url="";
        if (htmlLang == "en")
			url = ElasticS.root_url + '/api/as/v1/engines/adcb-en/search?' + $.param(params);
		else 
			url = ElasticS.root_url + '/api/as/v1/engines/adcb-ar/search?' + $.param(params);
		
        ElasticS.pingUrl(url, callback);
    };

    $.fn.elasticSearch = function (options) {
        var options = $.extend({}, $.fn.elasticSearch.defaults, options);

        return this.each(function () {
            var $this = $(this);
            var config = $.meta ? $.extend({}, options, $this.data()) : options;
            $this.data('swiftype-config-search', config);

            $this.selectedCallback = function (data) {
                return function (e) {
                    var $el = $(this);
                    e.preventDefault();
                    ElasticS.pingSearchResultClick(config.engineKey, data['id'], function () {
                        config.onComplete($el);
                    });
                };
            };

            $this.registerResult = function ($element, data) {
                $element.data('swiftype-item', data);
                $('a', $element).click($this.selectedCallback(data));
            };

            $this.getContentCache = function () {
                return $('#' + contentCacheId);
            };

            var $resultContainer = $(config.resultContainingElement),
                initialContentOfResultContainer = $resultContainer.html(),
                contentCacheId = 'st-content-cache',
                $contentCache = $this.getContentCache();

            var setSearchHash = function (query, page) {
                location.hash = "stq=" + encodeURIComponent(query) + "&stp=" + page;

            };
			
			// renamed _old
            submitSearch = function (queryTxt, options) {			
				
                options = $.extend({
                    page: 1
                }, options);
                var params = {};
                var _params = {};

                queryTxt = $("#st-search-input-header").val();

                if (!$contentCache.length) {
                    $resultContainer.after("<div id='" + contentCacheId + "' style='display: none;'></div>");
                    $contentCache.html(initialContentOfResultContainer).hide();
                }
                config.loadingFunction(queryTxt, $resultContainer);

                ElasticS.currentQuery = queryTxt;
                params['query'] = queryTxt;
                _params['query'] = queryTxt;
                //params['engine_key'] = config.engineKey;
                params['page'] = options.page;
                params['page'] = _page;
				
                function handleFunctionParam(field) {
                    if (field !== undefined) {
                        var evald = field;
                        if (typeof evald === 'function') {
                            evald = evald.call();
                        }
                        return evald;
                    }
                    return undefined;
                }

                //params['per_page'] = handleFunctionParam(config.perPage);
               // params['per_page'] = 10;
                //params['page'] = _page;
                params['search_fields'] = handleFunctionParam(config.searchFields);
                params['fetch_fields'] = handleFunctionParam(config.fetchFields);
                params['facets'] = handleFunctionParam(config.facets);
                params['filters'] = handleFunctionParam(config.filters);
                params['document_types'] = handleFunctionParam(config.documentTypes);
                params['functional_boosts'] = handleFunctionParam(config.functionalBoosts);
                params['sort_field'] = handleFunctionParam(config.sortField);
                params['sort_direction'] = handleFunctionParam(config.sortDirection);
                params['spelling'] = handleFunctionParam(config.spelling);
                params['highlight_fields'] = handleFunctionParam(config.highlightFields);
				
				/*var _param = {
					query : queryTxt,
					 page:{
						size: 10,
						current: _page						 
					}
				}	*/	
				var _param = JSON.stringify({
                        'query': queryTxt,
                        'page': {
							'size': 5,
							'current': 2
				        }});		
				 	
                /*$.ajax({
                    //dataType: "json",
					headers: {
								'Content-Type': 'application/json',
						'Authorization': 'Bearer search-jfoia22zxz66ek4pw2cq9f8g',
					  },
					method:'POST',					 
                    url: ElasticS.root_url + "/api/as/v1/engines/adcb-en/search",					 
                    body: JSON.stringify({
											'query': 'ADCB',
											  'page': {
														'size': 5,
														'current': 2
											  }
					   }),					
                    xhrFields: { withCredentials: true },
                    success: renderSearchResults
                });*/
				//_query
				 
				 var htmlLang = document.documentElement.lang.toLowerCase();
				 var url="";
				 var fData=[];
				 const jFile= "https://"+document.location.hostname+ "/" + htmlLang +"/personal/general/adcbsearch.json" ;
				 
				 $.getJSON(jFile,
					function (data) {						
						let val=0;
						_param = queryTxt;
							
						fData = data.filter(function(entity) {
							let words = _param.split(' ');
							let regexPattern = words.join('|');
							let regex = new RegExp(`\\b(${regexPattern})\\b`, 'gi');
							if (htmlLang =="ar")
								regex = _param;
							var tagMatch = entity.tags.some(function(typeStr) {
								//return typeStr.indexOf(_param.toLowerCase()) !== -1;
								return typeStr.match(regex);
							});
							//var keywordMatch = entity.title.indexOf(_param.toLowerCase()) !== -1 || entity.description.indexOf(_param.toLowerCase()) !== -1;
							var keywordMatch = entity.title.match(regex) || entity.description.match(regex);
							 
							var headMatch = entity.htag.some(function(typeStr) {
								//return typeStr.indexOf(_param.toLowerCase()) !== -1;
								return typeStr.match(regex);
							});
							var strongMatch = entity.strong.some(function(typeStr) {
								//return typeStr.indexOf(_param.toLowerCase()) !== -1;
								return typeStr.match(regex);
							});
							var liMatch = entity.litag.some(function(typeStr) {
								//return typeStr.indexOf(_param.toLowerCase()) !== -1;
								return typeStr.match(regex);
							});
							
							var pMatch = entity.para.some(function(typeStr) {
								//return typeStr.indexOf(_param.toLowerCase()) !== -1;
								return typeStr.match(regex);
							}); 

							return keywordMatch || headMatch || strongMatch || liMatch || tagMatch || pMatch;
						});
						if(fData.length > 1){
							//Remove duplicate pages
							filteredArr = fData.reduce((acc, current) => {
							  const x = acc.find(item => item.title.toLowerCase() === current.title.toLowerCase());
							  if (!x) {
								return acc.concat([current]);
							  } else {
								return acc;
							  }
							}, []);
						}

					});
				 
				 if (htmlLang =="en")
					 url= 'https://my-deployment-60665b.ent.southcentralus.azure.elastic-cloud.com/api/as/v1/engines/adcb-en/search'
				 else 
					 url = 'https://my-deployment-60665b.ent.southcentralus.azure.elastic-cloud.com/api/as/v1/engines/adcb-ar/search'
				 
				 fetch(url, {
						headers: {
								'Content-Type': 'application/json',
						'Authorization': 'Bearer search-jfoia22zxz66ek4pw2cq9f8g',
					  },
								method: 'POST',
								body: JSON.stringify({
											'query': queryTxt,
											  'page': {
														'size': parseInt(_pagesize),
														'current': parseInt(_page)
											  }
					   })})
					  .then(response => {
						if (!response.ok) {
						  throw new Error(response.status);
						}
						return response.json();
					  })
					  .then(data => {
						// Do something with the search results
						console.log(data);
						console.log(fData);
						if(fData.length > 0){
							for(let x =0; x < fData.length ;x++){
								data.results.unshift(fData[x]);
							}
							
						}
						renderSearchResults(data,fData);
					  })
					  .catch(error => {
						console.error(error);
					  });

				
				

            };

       

            var $containingForm = $this.parents('#searchForm');
            if ($containingForm) {
                $containingForm.bind('submit', function (e) {
                    e.preventDefault();
                    var searchQuery = $this.val();
                    setSearchHash(searchQuery, 1);
                });
            }

            $(document).on('click', '[data-hash][data-page]', function (e) {
                e.preventDefault();
                var $this = $(this);
                setSearchHash($.hashParams().stq, $this.data('page'));
            });

            $(document).on('click', '[data-hash][data-spelling-suggestion]', function (e) {
                e.preventDefault();
                var $this = $(this);
                setSearchHash($this.data('spelling-suggestion'), 1);
            });

			var renderSearchResults = function (data,fData) {
                $("#searchResult").html(' ');
                search = data.results;

                currrent_page = data.meta.page.current;
                num_pages = data.meta.page.total_pages + fData.length;
                total_result_count = data.meta.page.total_results + fData.length;
                if (typeof config.preRenderFunction === 'function') {
                    config.preRenderFunction.call($this, data);
                }

                config.renderResultsFunction($this.getContext(), data);

                if (typeof config.postRenderFunction === 'function') {
                    config.postRenderFunction.call($this, data);
                }
            };
			// renamed _old
            var renderSearchResults_old = function (data) {
                $("#searchResult").html(' ');
                search = data.records.page;

                currrent_page = data.info.page.current_page;
                num_pages = data.info.page.num_pages;
                total_result_count = data.info.page.total_result_count;
                if (typeof config.preRenderFunction === 'function') {
                    config.preRenderFunction.call($this, data);
                }

                config.renderResultsFunction($this.getContext(), data);

                if (typeof config.postRenderFunction === 'function') {
                    config.postRenderFunction.call($this, data);
                }
            };

            $this.getContext = function () {
                return {
                    config: config,
                    resultContainer: $resultContainer,
                    registerResult: $this.registerResult
                };
            };

            var params = $.queryParams();

            if (params.stq) {
                //$("#_searchString").text(params.stq);
				var _documentlang = $("html").attr("lang");
				if (_documentlang == "en")
					$("#_searchString").text("Your search results for keyword \"" + params.stq + "\"");
				else
					$("#_searchString").text("نتائج البحث الخاصة بك عن كلمة \"" + params.stq + "\"");
                $("#st-search-input-header").val(params.stq);

                submitSearch(params.stq, {
                    page: params.stp
                });
            } else {
                var $contentCache = $this.getContentCache();
                if ($contentCache.length) {
                    $resultContainer.html($contentCache.html());
                    $contentCache.remove();
                }
            }

            // $(window).hashchange(); // if the swiftype query hash is present onload (maybe the user is pressing the back button), submit a query onload
        });
    };

    var renderPagination = function (ctx, resultInfo) {
        var maxPagesType, maxPages = -1,
            config = ctx.config;
        $.each(resultInfo, function (documentType, typeInfo) {
            if (typeInfo.total_pages > maxPages) {
                maxPagesType = documentType;
                maxPages = typeInfo.total_pages;
            }
        });
        var currentPage = parseInt(resultInfo.current),
            totalPages = resultInfo.total_pages;

        $(config.renderPaginationForType(maxPagesType, currentPage, totalPages)).appendTo(ctx.resultContainer);
    };


    var normalize = function (str) {
        return $.trim(str).toLowerCase();
    };

    function htmlEscape(str) {
        return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    var defaultRenderResultsFunction = function (ctx, data) {
        //var $resultContainer = ctx.resultContainer,
        //    config = ctx.config;
        //
        //$resultContainer.html('');
        //
        //$.each(data.records, function (documentType, items) {
        // $.each(items, function (idx, item) {
        //    ctx.registerResult($(config.renderFunction(documentType, item)).appendTo($resultContainer), item);
        // });
        //});

        visibleToDiv();

        renderPagination(ctx, data.meta.page);
    };

    var defaultRenderFunction = function (document_type, item) {

        return '<div class="st-result"><h3 class="title"><a href="' + item['url'] + '" class="st-search-result-link">' + htmlEscape(item['title']) + '</a></h3></div>';
    };

    var defaultLoadingFunction = function (query, $resultContainer) {
        $resultContainer.html('<p class="st-loading-message">loading...</p>');
    };

    var defaultOnComplete = function (elem) {
        window.location = elem.attr('href');
    };

    var defaultPostRenderFunction = function (data) {
        var totalResultCount = 0;
        var $resultContainer = this.getContext().resultContainer;
        var spellingSuggestion = null;

        if (data['info']) {
            $.each(data['info'], function (index, value) {
                totalResultCount += value['total_result_count'];
                if (value['spelling_suggestion']) {
                    spellingSuggestion = value['spelling_suggestion']['text'];
                }

            });
        }

        if (totalResultCount === 0) {
            $resultContainer.html("<div id='st-no-results' class='st-no-results'>No results found.</div>");
        }

        if (spellingSuggestion !== null) {
            $resultContainer.append('<div class="st-spelling-suggestion">Did you mean <a href="#" data-hash="true" data-spelling-suggestion="' + spellingSuggestion + '">' + spellingSuggestion + '</a>?</div>');
        }
    };

    var defaultRenderPaginationForType = function (type, currentPage, totalPages) {
        var pages = '<div class="st-page">',
            previousPage, nextPage;
        if (currentPage != 1) {
            previousPage = currentPage - 1;
            pages = pages + '<a href="#" class="st-prev" data-hash="true" data-page="' + previousPage + '">&laquo; previous</a>';
        }
        if (currentPage < totalPages) {
            nextPage = currentPage + 1;
            pages = pages + '<a href="#" class="st-next" data-hash="true" data-page="' + nextPage + '">next &raquo;</a>';
        }
        pages += '</div>';
        return pages;
    };

    $.fn.elasticSearch.defaults = {
        attachTo: undefined,
        documentTypes: undefined,
        facets: undefined,
        filters: undefined,
        engineKey: undefined,
        searchFields: undefined,
        functionalBoosts: undefined,
        sortField: undefined,
        sortDirection: undefined,
        fetchFields: undefined,
        highlightFields: undefined,
        preRenderFunction: undefined,
        postRenderFunction: defaultPostRenderFunction,
        loadingFunction: defaultLoadingFunction,
        renderResultsFunction: defaultRenderResultsFunction,
        renderFunction: defaultRenderFunction,
        renderPaginationForType: defaultRenderPaginationForType,
        onComplete: defaultOnComplete,
        perPage: 10,
        spelling: 'strict'
    };
})($);
 
$(function () {
    var _documentlang = $("html").attr("lang");
    var _engineKey = _documentlang == "en" ? "Fr4xr4z89bqWRH_bBD6_" : "j2Wy9PdPSf2dNFnXJJr5";
    $('#st-search-input').elasticSearch({
        resultContainingElement: '#st-results-container',
        engineKey: _engineKey,

    });
});




(function ($) {
    var queryParser = function (a) {
        var i, p, b = {};
        if (a === "") {
            return {};
        }
        for (i = 0; i < a.length; i += 1) {
            p = a[i].split('=');
            if (p.length === 2) {
                b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
            }
        }
        return b;
    };
    $.queryParams = function () {
        return queryParser(window.location.search.substr(1).split('&'));
    };
    $.hashParams = function () {
        return queryParser(window.location.hash.substr(1).split('&'));
    };


    var ident = 0;

    window.ElasticS = window.ElasticS || {};
    ElasticS.root_url = ElasticS.root_url || 'https://my-deployment-60665b.ent.southcentralus.azure.elastic-cloud.com';
    ElasticS.pingUrl = function (endpoint, callback) {
        var to = setTimeout(callback, 350);
        var img = new Image();
        img.onload = img.onerror = function () {
            clearTimeout(to);
            callback();
        };
        img.src = endpoint;
        return false;
    }; 
    ElasticS.pingAutoSelection = function (engineKey, docId, value, callback) {
        var params = {
            t: new Date().getTime(),
            engine_key: engineKey,
            doc_id: docId,
            prefix: value
        };
        var url = "";
		var htmlLang = document.documentElement.lang.toLowerCase();
		if(htmlLang =="en")
			url=ElasticS.root_url + '/api/as/v1/engines/adcb-en/search?' + $.param(params);		 
        else 
			url=ElasticS.root_url + '/api/as/v1/engines/adcb-ar/search?' + $.param(params);		 
		ElasticS.pingUrl(url, callback);
    };
    ElasticS.findSelectedSection = function () {
        var sectionText = $.hashParams().sts;
        if (!sectionText) { return; }

        function normalizeText(str) {
            var out = str.replace(/\s+/g, '');
            out = out.toLowerCase();
            return out;
        }

        sectionText = normalizeText(sectionText);

        $('h1, h2, h3, h4, h5, h6').each(function (idx) {
            $this = $(this);
            if (normalizeText($this.text()).indexOf(sectionText) >= 0) {
                this.scrollIntoView(true);
                return false;
            }
        });
    };

    ElasticS.htmlEscape = ElasticS.htmlEscape || function htmlEscape(str) {
        return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    };

    $.fn.elasticS = function (options) {
        ElasticS.findSelectedSection();
        var options = $.extend({}, $.fn.elasticS.defaults, options);

        return this.each(function () {
            var $this = $(this);
            var config = $.meta ? $.extend({}, options, $this.data()) : options;
            $this.attr('autocomplete', 'off');
            $this.data('swiftype-config-autocomplete', config);
            $this.submitted = false;
            $this.cache = new LRUCache(10);
            $this.emptyQueries = [];

            $this.isEmpty = function (query) {
                return $.inArray(normalize(query), this.emptyQueries) >= 0
            };

            $this.addEmpty = function (query) {
                $this.emptyQueries.unshift(normalize(query));
            };

            var styles = config.dropdownStylesFunction($this);
            var $elasticSWidget = $('<div class="' + config.widgetContainerClass + '" />');
            var $listContainer = $('<div />').addClass(config.suggestionListClass).appendTo($elasticSWidget).css(styles).hide();
            $elasticSWidget.appendTo(config.autocompleteContainingElement);
            var $list = $('<' + config.suggestionListType + ' />').appendTo($listContainer);
            var $list = $(".c-search__listwrapper");
            $this.data('swiftype-list', $list);

            $this.abortCurrent = function () {
                if ($this.currentRequest) {
                    $this.currentRequest.abort();
                }
            };

            $this.showList = function () {
                if (handleFunctionParam(config.disableAutocomplete) === false) {
                    $listContainer.show();
                }
            };

            $this.hideList = function (sync) {
                if (sync) {
                    $listContainer.hide();
                } else {
                    setTimeout(function () { $listContainer.hide(); }, 10);
                }
            };

            $this.showNoResults = function () {
                $list.empty();
                if (config.noResultsMessage === undefined) {
                    $this.hideList();
                } else {
                    $list.append($('<li />', { 'class': config.noResultsClass }).text(config.noResultsMessage));
                    $this.showList();
                }
            };

            $this.focused = function () {
                return $this.is(':focus');
            };

            $this.submitting = function () {
                $this.submitted = true;
            };

            $this.listResults = function () {
                return $(config.resultListSelector, $list).filter(':not(.' + config.noResultsClass + ')');
            };

            $this.activeResult = function () {
                return $this.listResults().filter('.' + config.activeItemClass).first();
            };

            $this.prevResult = function () {
                var list = $this.listResults(),
                    currentIdx = list.index($this.activeResult()),
                    nextIdx = currentIdx - 1,
                    next = list.eq(nextIdx);
                $this.listResults().removeClass(config.activeItemClass);
                if (nextIdx >= 0) {
                    next.addClass(config.activeItemClass);
                }
            };

            $this.nextResult = function () {
                var list = $this.listResults(),
                    currentIdx = list.index($this.activeResult()),
                    nextIdx = currentIdx + 1,
                    next = list.eq(nextIdx);
                $this.listResults().removeClass(config.activeItemClass);
                if (nextIdx >= 0) {
                    next.addClass(config.activeItemClass);
                }
            };

            $this.selectedCallback = function (data) {
                return function () {
                    var value = $this.val(),
                        callback = function () {
                            config.onComplete(data, value);
                        };
                    //ElasticS.pingAutoSelection(config.engineKey, data['id'], value, callback);
                };
            };

            $this.registerResult = function ($element, data) {
                $element.data('swiftype-item', data);
                $element.click($this.selectedCallback(data)).mouseover(function () {
                    $this.listResults().removeClass(config.activeItemClass);
                    $element.addClass(config.activeItemClass);
                });
            };

            $this.getContext = function () {
                return {
                    config: config,
                    list: $list,
                    registerResult: $this.registerResult
                };
            };


            var typingDelayPointer;
            var suppressKey = false;
            $this.lastValue = '';
            $this.keyup(function (event) {
                if (suppressKey) {
                    suppressKey = false;
                    return;
                }

                // ignore arrow keys, shift
                if (((event.which > 36) && (event.which < 41)) || (event.which == 16)) return;

                if (config.typingDelay > 0) {
                    clearTimeout(typingDelayPointer);
                    typingDelayPointer = setTimeout(function () {
                        processInput($this);
                    }, config.typingDelay);
                } else {
                    processInput($this);
                }
            });

            $this.styleDropdown = function () {
                $listContainer.css(config.dropdownStylesFunction($this));
            };

            $(window).resize(function (event) {
                $this.styleDropdown();
            });

            $this.keydown(function (event) {
                if (event.which == 32 && $(this).val().trim() != "") {
                    dataLayer.push({
                        'event': 'eventTracker',
                        'eventCategory': 'internal site searches',
                        'eventAction': 'predicted searches',
                        'eventLabel': $(this).val().toLocaleLowerCase(),
                        'eventValue': 0,
                        'nonInteraction': 0
                    });
                }

                $this.styleDropdown();
                // enter = 13; up = 38; down = 40; esc = 27
                var $active = $this.activeResult();
                switch (event.which) {
                    case 13:
                        if (($active.length !== 0) && ($list.is(':visible'))) {
                            event.preventDefault();
                            $this.selectedCallback($active.data('swiftype-item'))();
                        } else if ($this.currentRequest) {
                            $this.submitting();
							var srchTxt = $(this).val().trim().toLocaleLowerCase();
							srchTxt = srchTxt.replaceAll(" ", "+")
							if(window.location.href.indexOf("/en/") != -1)
								window.location.href = "/en/search?stq=" + srchTxt;
							else 
								window.location.href = "/ar/search?stq=" + srchTxt;
                        }
                        $this.hideList();
                        suppressKey = true;
                        break;
						
						 
                    case 38:
                        event.preventDefault();
                        if ($active.length === 0) {
                            $this.listResults().last().addClass(config.activeItemClass);
                        } else {
                            $this.prevResult();
                        }
                        break;
                    case 40:
                        event.preventDefault();
                        if ($active.length === 0) {
                            $this.listResults().first().addClass(config.activeItemClass);
                        } else if ($active != $this.listResults().last()) {
                            $this.nextResult();
                        }
                        break;
                    case 27:
                        $this.hideList();
                        suppressKey = true;
                        break;
                    default:
                        $this.submitted = false;
                        break;
                }
            });

            // opera wants keypress rather than keydown to prevent the form submit
             $this.keypress(function (event) {
                if ((event.which == 13) && ($this.activeResult().length > 0)) {
                    event.preventDefault();
                }
            });

            // stupid hack to get around loss of focus on mousedown
            var mouseDown = false;
            var blurWait = false;
            $(document).bind('mousedown.swiftype' + ++ident, function () {
                mouseDown = true;
            });
            $(document).bind('mouseup.swiftype' + ident, function () {
                mouseDown = false;
                if (blurWait) {
                    blurWait = false;
                    $this.hideList();
                }
            });
            $this.blur(function () {
                if (mouseDown) {
                    blurWait = true;
                } else {
                    $this.hideList();
                }
            });
            $this.focus(function () {
                setTimeout(function () { $this.select() }, 10);
                if ($this.listResults().length > 0) {
                    $this.showList();
                }
            });
        });
    };

    var normalize = function (str) {
        return $.trim(str).toLowerCase();
    };

    var callRemote = function ($this, term) {
        $this.abortCurrent();
		var htmlLang = document.documentElement.lang.toLowerCase();
				 var url="";
				 var fData=[];
				 const jFile= "https://"+document.location.hostname+ "/" + htmlLang +"/personal/general/adcbsearch.json" ;
				 
				 $.getJSON(jFile,
					function (data) {						
						let val=0;
						_param = term;
							
						fData = data.filter(function(entity) {
							let words = _param.split(' ');
							let regexPattern = words.join('|');
							let regex = new RegExp(`\\b(${regexPattern})\\b`, 'gi');
							if (htmlLang =="ar")
								regex = _param;
							var tagMatch = entity.tags.some(function(typeStr) {
								//return typeStr.indexOf(_param.toLowerCase()) !== -1;
								return typeStr.match(regex);
							});
							//var keywordMatch = entity.title.indexOf(_param.toLowerCase()) !== -1 || entity.description.indexOf(_param.toLowerCase()) !== -1;
							var keywordMatch = entity.title.match(regex) || entity.description.match(regex);
							 
							var headMatch = entity.htag.some(function(typeStr) {
								//return typeStr.indexOf(_param.toLowerCase()) !== -1;
								return typeStr.match(regex);
							});
							var strongMatch = entity.strong.some(function(typeStr) {
								//return typeStr.indexOf(_param.toLowerCase()) !== -1;
								return typeStr.match(regex);
							});
							var liMatch = entity.litag.some(function(typeStr) {
								//return typeStr.indexOf(_param.toLowerCase()) !== -1;
								return typeStr.match(regex);
							});
							
							var pMatch = entity.para.some(function(typeStr) {
								//return typeStr.indexOf(_param.toLowerCase()) !== -1;
								return typeStr.match(regex);
							}); 

							return keywordMatch || headMatch || strongMatch || liMatch || tagMatch || pMatch;
						});
						if(fData.length > 1){
							//Remove duplicate pages
							filteredArr = fData.reduce((acc, current) => {
							  const x = acc.find(item => item.title.toLowerCase() === current.title.toLowerCase());
							  if (!x) {
								return acc.concat([current]);
							  } else {
								return acc;
							  }
							}, []);
						}

					});

        var static_search = true;



        var params = {},
            config = $this.data('swiftype-config-autocomplete');

        params['q'] = term;
        params['engine_key'] = config.engineKey;
        params['search_fields'] = handleFunctionParam(config.searchFields);
        params['fetch_fields'] = handleFunctionParam(config.fetchFields);
        params['filters'] = handleFunctionParam(config.filters);
        params['document_types'] = handleFunctionParam(config.documentTypes);
        params['functional_boosts'] = handleFunctionParam(config.functionalBoosts);
        params['sort_field'] = handleFunctionParam(config.sortField);
        params['sort_direction'] = handleFunctionParam(config.sortDirection);
        params['per_page'] = config.resultLimit;
        params['highlight_fields'] = config.highlightFields;
		var endpoint = "";
		var htmlLang = document.documentElement.lang.toLowerCase();
		if(htmlLang =="en")
			endpoint = ElasticS.root_url + '/api/as/v1/engines/adcb-en/search';
        else 
			endpoint = ElasticS.root_url + '/api/as/v1/engines/adcb-ar/search';
		var _params = {
			'query' : term
		}
		$this.currentRequest = $.ajax({
            type: 'GET',
            url: endpoint,
            dataType: 'json',
			headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer search-jfoia22zxz66ek4pw2cq9f8g',
					},
            data: _params,
			xhrFields : { withCredentials: true },
        }).done(function (data) {
			
			if(fData.length > 0){
				for(let x =0; x < fData.length ;x++){
								data.results.unshift(fData[x]);
							}
			}
			
            var norm = normalize(term);
            //IPO FIX

            if (static_search) {
                var tempadding = {
                    "url":
                        "https://www.adcb.com/en/personal/wealth-management/capital-markets/ipo.aspx",
                    "_index": "5bfbf19a8db2315cd7e9fc46",
                    "_type": "_doc",
                    "_score": 6.68005,
                    "_version": null,
                    "_explanation": null,
                    "sort": null,
                    "highlight": {
                        "title": "<em>IPO Subscription</em> Services | ADCB"
                    },
                    "id": "5fbee54fe7b9d276cc8b05c8"
                }


                var tempquery = $("#st-search-input-header").val();






                /*if ("ipo subscription services adnoc".includes(tempquery.toLowerCase())) {
                    data.records.page.push(tempadding)
                    data.record_count = data.record_count + 1;
                }*/
            }
            //End IPO FIX


            if (data.results.length > 0) {
                $this.cache.put(norm, data.records);
                dataLayer.push({
                    'event': 'eventTracker',
                    'eventCategory': 'internal site searches',
                    'eventAction': 'custom searches : success',
                    'eventLabel': term.toLocaleLowerCase() + ' : ' + data.record_count,
                    'eventValue': 0,
                    'nonInteraction': 0
                });
            } else {
                dataLayer.push({
                    'event': 'eventTracker',
                    'eventCategory': 'internal site searches',
                    'eventAction': 'custom searches : fail',
                    'eventLabel': term.toLocaleLowerCase(),
                    'eventValue': 0,
                    'nonInteraction': 0
                });

                $this.addEmpty(norm);
                $this.showNoResults();
                return;
            }
            processData($this, data.results, term);
            $(".c-search__item a").click(function () {
                dataLayer.push({
                    'event': 'eventTracker',
                    'eventCategory': 'internal site searches',
                    'eventAction': 'custom searches : search result selection',
                    'eventLabel': $("#st-search-input-header").val().toLocaleLowerCase() + ' : ' + $(this).text().toLocaleLowerCase(),
                    'eventValue': 0,
                    'nonInteraction': 0
                });
            })


        });
    };

    var getResults = function ($this, term) {
        var norm = normalize(term);
        if ($this.isEmpty(norm)) {
            $this.showNoResults();
            return;
        }
        var cached = $this.cache.get(norm);
        if (cached) {
            processData($this, cached, term);
        } else {
            callRemote($this, term);
        }
    };

    // private helpers
    var processInput = function ($this) {
        var term = $this.val();
        if (term === $this.lastValue) {
            return;
        }
        $this.lastValue = term;
        if ($.trim(term) === '') {
            $this.data('swiftype-list').empty()
            $this.hideList();
            return;
        }
        if (typeof $this.data('swiftype-config-autocomplete').engineKey !== 'undefined') {
            getResults($this, term);
        }
    };

    var processData = function ($this, data, term) {
        var $list = $this.data('swiftype-list'),
            config = $this.data('swiftype-config-autocomplete');

        $list.empty();
        $this.hideList(true);

        config.resultRenderFunction($this.getContext(), data);

        var totalItems = $this.listResults().length;
        if ((totalItems > 0 && $this.focused()) || (config.noResultsMessage !== undefined)) {
            if ($this.submitted) {
                $this.submitted = false;
            } else {
                $this.showList();
            }
        }
    };

    var defaultResultRenderFunction = function (ctx, results) {
        var $list = ctx.list,
            config = ctx.config;
		
		var _listResult = {};
		
		
        $.each(results, function (key, items) {
            
			ctx.registerResult($('<li class="c-search__item">' + config.renderFunction(items['title'], items['url']) + '</li>').appendTo($list), items);
        });
		
        /*$.each(results, function (document_type, items) {
            $.each(items, function (idx, item) {
				item = item.raw;
                ctx.registerResult($('<li class="c-search__item">' + config.renderFunction(document_type, item) + '</li>').appendTo($list), item);
            });
        });*/
    };

    var defaultRenderFunction = function (_title, _url) {
        var title = (_title.raw != undefined)? _title.raw : _title; // item['highlight']['title'];
        title = title.replace("<em>", "");
        title = title.replace("</em>", "");
		let _purl =  (_url.raw != undefined)? _url.raw : _url ;
		if (_purl.indexOf(".pdf") > 0)
			return '<a href="' + _purl + '">' + title + '</a><span class="icon-pdf"></span> ';
		
		return '<a href="' + _purl + '">' + title + '</a>';
    };

    var defaultOnComplete = function (item, prefix) {
        window.location = item['url'];
    };

    var defaultDropdownStylesFunction = function ($this) {
        var config = $this.data('swiftype-config-autocomplete');
        var $attachEl = config.attachTo ? $(config.attachTo) : $this;
        var offset = $attachEl.offset();
        var styles = {
            'position': 'absolute',
            'z-index': 9999,
            'top': offset.top + $attachEl.outerHeight() + 1,
            'left': offset.left
        };
        if (config.setWidth) {
            styles['width'] = $attachEl.outerWidth() - 2;
        }
        return styles;
    };

    var handleFunctionParam = function (field) {
        if (field !== undefined) {
            var evald = field;
            if (typeof evald === 'function') {
                evald = evald.call();
            }
            return evald;
        }
        return undefined;
    };

    // simple client-side LRU Cache, based on https://github.com/rsms/js-lru

    function LRUCache(limit) {
        this.size = 0;
        this.limit = limit;
        this._keymap = {};
    }

    LRUCache.prototype.put = function (key, value) {
        var entry = {
            key: key,
            value: value
        };
        this._keymap[key] = entry;
        if (this.tail) {
            this.tail.newer = entry;
            entry.older = this.tail;
        } else {
            this.head = entry;
        }
        this.tail = entry;
        if (this.size === this.limit) {
            return this.shift();
        } else {
            this.size++;
        }
    };

    LRUCache.prototype.shift = function () {
        var entry = this.head;
        if (entry) {
            if (this.head.newer) {
                this.head = this.head.newer;
                this.head.older = undefined;
            } else {
                this.head = undefined;
            }
            entry.newer = entry.older = undefined;
            delete this._keymap[entry.key];
        }
        return entry;
    };

    LRUCache.prototype.get = function (key, returnEntry) {
        var entry = this._keymap[key];
        if (entry === undefined) return;
        if (entry === this.tail) {
            return entry.value;
        }
        if (entry.newer) {
            if (entry === this.head) this.head = entry.newer;
            entry.newer.older = entry.older;
        }
        if (entry.older) entry.older.newer = entry.newer;
        entry.newer = undefined;
        entry.older = this.tail;
        if (this.tail) this.tail.newer = entry;
        this.tail = entry;
        return returnEntry ? entry : entry.value;
    };

    LRUCache.prototype.remove = function (key) {
        var entry = this._keymap[key];
        if (!entry) return;
        delete this._keymap[entry.key];
        if (entry.newer && entry.older) {
            entry.older.newer = entry.newer;
            entry.newer.older = entry.older;
        } else if (entry.newer) {
            entry.newer.older = undefined;
            this.head = entry.newer;
        } else if (entry.older) {
            entry.older.newer = undefined;
            this.tail = entry.older;
        } else {
            this.head = this.tail = undefined;
        }

        this.size--;
        return entry.value;
    };

    LRUCache.prototype.clear = function () {
        this.head = this.tail = undefined;
        this.size = 0;
        this._keymap = {};
    };

    if (typeof Object.keys === 'function') {
        LRUCache.prototype.keys = function () {
            return Object.keys(this._keymap);
        };
    } else {
        LRUCache.prototype.keys = function () {
            var keys = [];
            for (var k in this._keymap) keys.push(k);
            return keys;
        };
    }

    $.fn.elasticS.defaults = {
        activeItemClass: 'active',
        attachTo: undefined,
        documentTypes: undefined,
        filters: undefined,
        engineKey: undefined,
        searchFields: undefined,
        functionalBoosts: undefined,
        sortField: undefined,
        sortDirection: undefined,
        fetchFields: undefined,
        highlightFields: undefined,
        noResultsClass: 'noResults',
        noResultsMessage: undefined,
        onComplete: defaultOnComplete,
        resultRenderFunction: defaultResultRenderFunction,
        renderFunction: defaultRenderFunction,
        dropdownStylesFunction: defaultDropdownStylesFunction,
        resultLimit: undefined,
        suggestionListType: 'ul',
        suggestionListClass: 'autocomplete',
        resultListSelector: 'li',
        setWidth: true,
        typingDelay: 80,
        disableAutocomplete: false,
        autocompleteContainingElement: 'body',
        widgetContainerClass: 'swiftype-widget'
    };

})($);



$(function () {
    var _documentlang = $("html").attr("lang");
    var _engineKey = _documentlang == "en" ? "Fr4xr4z89bqWRH_bBD6_" : "j2Wy9PdPSf2dNFnXJJr5";

    $('#st-search-input-header').elasticS({
        highlightFields: { 'page': { 'title': { 'size': 100, 'fallback': true } } },
        fetchFields: { page: ['url'] },
        engineKey: _engineKey
    });
});

// --end--


 
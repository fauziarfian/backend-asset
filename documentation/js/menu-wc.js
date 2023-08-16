'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">latihan-nestjs documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-201452871b4b9d5d7e56fd035ea916aaa7e1353ca54e527e46ad9a9f8aee18cf604e9a4a9f05bf31d700da956d2bcff66fb779ea664d7ae21cfac6e3548fee06"' : 'data-bs-target="#xs-controllers-links-module-AppModule-201452871b4b9d5d7e56fd035ea916aaa7e1353ca54e527e46ad9a9f8aee18cf604e9a4a9f05bf31d700da956d2bcff66fb779ea664d7ae21cfac6e3548fee06"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-201452871b4b9d5d7e56fd035ea916aaa7e1353ca54e527e46ad9a9f8aee18cf604e9a4a9f05bf31d700da956d2bcff66fb779ea664d7ae21cfac6e3548fee06"' :
                                            'id="xs-controllers-links-module-AppModule-201452871b4b9d5d7e56fd035ea916aaa7e1353ca54e527e46ad9a9f8aee18cf604e9a4a9f05bf31d700da956d2bcff66fb779ea664d7ae21cfac6e3548fee06"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-201452871b4b9d5d7e56fd035ea916aaa7e1353ca54e527e46ad9a9f8aee18cf604e9a4a9f05bf31d700da956d2bcff66fb779ea664d7ae21cfac6e3548fee06"' : 'data-bs-target="#xs-injectables-links-module-AppModule-201452871b4b9d5d7e56fd035ea916aaa7e1353ca54e527e46ad9a9f8aee18cf604e9a4a9f05bf31d700da956d2bcff66fb779ea664d7ae21cfac6e3548fee06"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-201452871b4b9d5d7e56fd035ea916aaa7e1353ca54e527e46ad9a9f8aee18cf604e9a4a9f05bf31d700da956d2bcff66fb779ea664d7ae21cfac6e3548fee06"' :
                                        'id="xs-injectables-links-module-AppModule-201452871b4b9d5d7e56fd035ea916aaa7e1353ca54e527e46ad9a9f8aee18cf604e9a4a9f05bf31d700da956d2bcff66fb779ea664d7ae21cfac6e3548fee06"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-ff68195a4ced8f614cdad6aba781419dc637b4e2b6e4900edacee4389cec977f0d8c3a51435dbbd552d13ada73017d7f543d72759f18cab951d86ef755ff8492"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-ff68195a4ced8f614cdad6aba781419dc637b4e2b6e4900edacee4389cec977f0d8c3a51435dbbd552d13ada73017d7f543d72759f18cab951d86ef755ff8492"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-ff68195a4ced8f614cdad6aba781419dc637b4e2b6e4900edacee4389cec977f0d8c3a51435dbbd552d13ada73017d7f543d72759f18cab951d86ef755ff8492"' :
                                            'id="xs-controllers-links-module-AuthModule-ff68195a4ced8f614cdad6aba781419dc637b4e2b6e4900edacee4389cec977f0d8c3a51435dbbd552d13ada73017d7f543d72759f18cab951d86ef755ff8492"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-ff68195a4ced8f614cdad6aba781419dc637b4e2b6e4900edacee4389cec977f0d8c3a51435dbbd552d13ada73017d7f543d72759f18cab951d86ef755ff8492"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-ff68195a4ced8f614cdad6aba781419dc637b4e2b6e4900edacee4389cec977f0d8c3a51435dbbd552d13ada73017d7f543d72759f18cab951d86ef755ff8492"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-ff68195a4ced8f614cdad6aba781419dc637b4e2b6e4900edacee4389cec977f0d8c3a51435dbbd552d13ada73017d7f543d72759f18cab951d86ef755ff8492"' :
                                        'id="xs-injectables-links-module-AuthModule-ff68195a4ced8f614cdad6aba781419dc637b4e2b6e4900edacee4389cec977f0d8c3a51435dbbd552d13ada73017d7f543d72759f18cab951d86ef755ff8492"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LatihanModule.html" data-type="entity-link" >LatihanModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-LatihanModule-249fa5030598b3f45f164f187ba323a1f097f0f56f335da933b16e75e4bc197dbb1b96aa7117f178bef5b4e6babc5fbbf5145987484adf2357c9cf639afec1e9"' : 'data-bs-target="#xs-controllers-links-module-LatihanModule-249fa5030598b3f45f164f187ba323a1f097f0f56f335da933b16e75e4bc197dbb1b96aa7117f178bef5b4e6babc5fbbf5145987484adf2357c9cf639afec1e9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LatihanModule-249fa5030598b3f45f164f187ba323a1f097f0f56f335da933b16e75e4bc197dbb1b96aa7117f178bef5b4e6babc5fbbf5145987484adf2357c9cf639afec1e9"' :
                                            'id="xs-controllers-links-module-LatihanModule-249fa5030598b3f45f164f187ba323a1f097f0f56f335da933b16e75e4bc197dbb1b96aa7117f178bef5b4e6babc5fbbf5145987484adf2357c9cf639afec1e9"' }>
                                            <li class="link">
                                                <a href="controllers/LatihanController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LatihanController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-LatihanModule-249fa5030598b3f45f164f187ba323a1f097f0f56f335da933b16e75e4bc197dbb1b96aa7117f178bef5b4e6babc5fbbf5145987484adf2357c9cf639afec1e9"' : 'data-bs-target="#xs-injectables-links-module-LatihanModule-249fa5030598b3f45f164f187ba323a1f097f0f56f335da933b16e75e4bc197dbb1b96aa7117f178bef5b4e6babc5fbbf5145987484adf2357c9cf639afec1e9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LatihanModule-249fa5030598b3f45f164f187ba323a1f097f0f56f335da933b16e75e4bc197dbb1b96aa7117f178bef5b4e6babc5fbbf5145987484adf2357c9cf639afec1e9"' :
                                        'id="xs-injectables-links-module-LatihanModule-249fa5030598b3f45f164f187ba323a1f097f0f56f335da933b16e75e4bc197dbb1b96aa7117f178bef5b4e6babc5fbbf5145987484adf2357c9cf639afec1e9"' }>
                                        <li class="link">
                                            <a href="injectables/LatihanService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LatihanService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PrismaModule-b26166f92cfad849b117ab7a0966ae4955fe54c993ba0e2bce18e8660576c78b61e87dfe1d30b6407977f484c8c6f333193368bb31119c8d03443fbbe7bbe7ad"' : 'data-bs-target="#xs-injectables-links-module-PrismaModule-b26166f92cfad849b117ab7a0966ae4955fe54c993ba0e2bce18e8660576c78b61e87dfe1d30b6407977f484c8c6f333193368bb31119c8d03443fbbe7bbe7ad"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-b26166f92cfad849b117ab7a0966ae4955fe54c993ba0e2bce18e8660576c78b61e87dfe1d30b6407977f484c8c6f333193368bb31119c8d03443fbbe7bbe7ad"' :
                                        'id="xs-injectables-links-module-PrismaModule-b26166f92cfad849b117ab7a0966ae4955fe54c993ba0e2bce18e8660576c78b61e87dfe1d30b6407977f484c8c6f333193368bb31119c8d03443fbbe7bbe7ad"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SchoolModule.html" data-type="entity-link" >SchoolModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SchoolModule-d971446a974e748cc7a731ec4412da2079c69e3101810bde80cbb3decb14bfc0869f500ee0b2cf3217192ccf5fb05d65e414ee35263976ebfdcf3a8c1c0b1447"' : 'data-bs-target="#xs-controllers-links-module-SchoolModule-d971446a974e748cc7a731ec4412da2079c69e3101810bde80cbb3decb14bfc0869f500ee0b2cf3217192ccf5fb05d65e414ee35263976ebfdcf3a8c1c0b1447"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SchoolModule-d971446a974e748cc7a731ec4412da2079c69e3101810bde80cbb3decb14bfc0869f500ee0b2cf3217192ccf5fb05d65e414ee35263976ebfdcf3a8c1c0b1447"' :
                                            'id="xs-controllers-links-module-SchoolModule-d971446a974e748cc7a731ec4412da2079c69e3101810bde80cbb3decb14bfc0869f500ee0b2cf3217192ccf5fb05d65e414ee35263976ebfdcf3a8c1c0b1447"' }>
                                            <li class="link">
                                                <a href="controllers/SchoolController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SchoolController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SchoolModule-d971446a974e748cc7a731ec4412da2079c69e3101810bde80cbb3decb14bfc0869f500ee0b2cf3217192ccf5fb05d65e414ee35263976ebfdcf3a8c1c0b1447"' : 'data-bs-target="#xs-injectables-links-module-SchoolModule-d971446a974e748cc7a731ec4412da2079c69e3101810bde80cbb3decb14bfc0869f500ee0b2cf3217192ccf5fb05d65e414ee35263976ebfdcf3a8c1c0b1447"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SchoolModule-d971446a974e748cc7a731ec4412da2079c69e3101810bde80cbb3decb14bfc0869f500ee0b2cf3217192ccf5fb05d65e414ee35263976ebfdcf3a8c1c0b1447"' :
                                        'id="xs-injectables-links-module-SchoolModule-d971446a974e748cc7a731ec4412da2079c69e3101810bde80cbb3decb14bfc0869f500ee0b2cf3217192ccf5fb05d65e414ee35263976ebfdcf3a8c1c0b1447"' }>
                                        <li class="link">
                                            <a href="injectables/SchoolService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SchoolService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TaskModule.html" data-type="entity-link" >TaskModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TaskModule-ad48af089d0335b327f87913855543d95b6733294d5df4cfaa46c0e566e5144786beb3ff1ada3bae31547b542f67fdaf26d89c2c73ac8785d7df1fb4acc346eb"' : 'data-bs-target="#xs-controllers-links-module-TaskModule-ad48af089d0335b327f87913855543d95b6733294d5df4cfaa46c0e566e5144786beb3ff1ada3bae31547b542f67fdaf26d89c2c73ac8785d7df1fb4acc346eb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TaskModule-ad48af089d0335b327f87913855543d95b6733294d5df4cfaa46c0e566e5144786beb3ff1ada3bae31547b542f67fdaf26d89c2c73ac8785d7df1fb4acc346eb"' :
                                            'id="xs-controllers-links-module-TaskModule-ad48af089d0335b327f87913855543d95b6733294d5df4cfaa46c0e566e5144786beb3ff1ada3bae31547b542f67fdaf26d89c2c73ac8785d7df1fb4acc346eb"' }>
                                            <li class="link">
                                                <a href="controllers/TaskController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TaskModule-ad48af089d0335b327f87913855543d95b6733294d5df4cfaa46c0e566e5144786beb3ff1ada3bae31547b542f67fdaf26d89c2c73ac8785d7df1fb4acc346eb"' : 'data-bs-target="#xs-injectables-links-module-TaskModule-ad48af089d0335b327f87913855543d95b6733294d5df4cfaa46c0e566e5144786beb3ff1ada3bae31547b542f67fdaf26d89c2c73ac8785d7df1fb4acc346eb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TaskModule-ad48af089d0335b327f87913855543d95b6733294d5df4cfaa46c0e566e5144786beb3ff1ada3bae31547b542f67fdaf26d89c2c73ac8785d7df1fb4acc346eb"' :
                                        'id="xs-injectables-links-module-TaskModule-ad48af089d0335b327f87913855543d95b6733294d5df4cfaa46c0e566e5144786beb3ff1ada3bae31547b542f67fdaf26d89c2c73ac8785d7df1fb4acc346eb"' }>
                                        <li class="link">
                                            <a href="injectables/TaskService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/LatihanController.html" data-type="entity-link" >LatihanController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SchoolController.html" data-type="entity-link" >SchoolController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TaskController.html" data-type="entity-link" >TaskController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSchoolDto.html" data-type="entity-link" >CreateSchoolDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTaskDto.html" data-type="entity-link" >CreateTaskDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterDto.html" data-type="entity-link" >RegisterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/School.html" data-type="entity-link" >School</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSchoolDto.html" data-type="entity-link" >UpdateSchoolDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTaskDto.html" data-type="entity-link" >UpdateTaskDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LatihanService.html" data-type="entity-link" >LatihanService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SchoolService.html" data-type="entity-link" >SchoolService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TaskService.html" data-type="entity-link" >TaskService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Task.html" data-type="entity-link" >Task</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
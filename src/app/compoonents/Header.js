// Header.js

import React from 'react';
import "./header.css"
// import logo from './logo.png'; // Assuming your logo image is in the same directory as Header.js


const Header = () => {
  return (
    <header>
   <div className='header aeohead'>
    <div className='headinner'>
        <div className='headlogo'>           
<img src='https://www.migracija.lt/image/layout_set_logo?img_id=39910&t=1710972658977' alt='emigrate'></img>
<div className='headlogoinner'>
    <h2 className='blueword'>MIGRIS</h2>
    <h3 className='spanword'>Electronic migration services</h3>
</div>
        </div>
        <div className='headcont'>
            <a className='orangequery' href='https://www.immigration.govt.nz/about-us/contact'>Book A Visit</a>
            <a className='bluequery' href='https://www.immigration.govt.nz/about-us/contact'>Login</a>
        </div>
    </div>
    <div className='mainhe'>
    {/* <div className='mainheadbread'>
    <div className='headbread'>
        <div className='headbreadfirst'>
            <a href='#'>Home</a>
        </div>
        <div className='headbreadfirst headbreadsec'>
            <a href='#'> VisaView </a>
        </div>
        <div className='headbreadfirst headbreadth'>
            <a href='#'> Visa Verification Inquiry </a>
        </div>
    </div>
    </div> */}


<div className="nav-wrap" id="navigationCollapse">
      <div className="nav-icons-container scgfinal">
        <div className="nav-icons glasicon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M118.6 80c-11.5 0-21.4 7.9-24 19.1L57 260.3c20.5-6.2 48.3-12.3 78.7-12.3c32.3 0 61.8 6.9 82.8 13.5c10.6 3.3 19.3 6.7 25.4 9.2c3.1 1.3 5.5 2.4 7.3 3.2c.9 .4 1.6 .7 2.1 1l.6 .3 .2 .1 .1 0 0 0 0 0s0 0-6.3 12.7h0l6.3-12.7c5.8 2.9 10.4 7.3 13.5 12.7h40.6c3.1-5.3 7.7-9.8 13.5-12.7l6.3 12.7h0c-6.3-12.7-6.3-12.7-6.3-12.7l0 0 0 0 .1 0 .2-.1 .6-.3c.5-.2 1.2-.6 2.1-1c1.8-.8 4.2-1.9 7.3-3.2c6.1-2.6 14.8-5.9 25.4-9.2c21-6.6 50.4-13.5 82.8-13.5c30.4 0 58.2 6.1 78.7 12.3L481.4 99.1c-2.6-11.2-12.6-19.1-24-19.1c-3.1 0-6.2 .6-9.2 1.8L416.9 94.3c-12.3 4.9-26.3-1.1-31.2-13.4s1.1-26.3 13.4-31.2l31.3-12.5c8.6-3.4 17.7-5.2 27-5.2c33.8 0 63.1 23.3 70.8 56.2l43.9 188c1.7 7.3 2.9 14.7 3.5 22.1c.3 1.9 .5 3.8 .5 5.7v6.7V352v16c0 61.9-50.1 112-112 112H419.7c-59.4 0-108.5-46.4-111.8-105.8L306.6 352H269.4l-1.2 22.2C264.9 433.6 215.8 480 156.3 480H112C50.1 480 0 429.9 0 368V352 310.7 304c0-1.9 .2-3.8 .5-5.7c.6-7.4 1.8-14.8 3.5-22.1l43.9-188C55.5 55.3 84.8 32 118.6 32c9.2 0 18.4 1.8 27 5.2l31.3 12.5c12.3 4.9 18.3 18.9 13.4 31.2s-18.9 18.3-31.2 13.4L127.8 81.8c-2.9-1.2-6-1.8-9.2-1.8zM64 325.4V368c0 26.5 21.5 48 48 48h44.3c25.5 0 46.5-19.9 47.9-45.3l2.5-45.6c-2.3-.8-4.9-1.7-7.5-2.5c-17.2-5.4-39.9-10.5-63.6-10.5c-23.7 0-46.2 5.1-63.2 10.5c-3.1 1-5.9 1.9-8.5 2.9zM512 368V325.4c-2.6-.9-5.5-1.9-8.5-2.9c-17-5.4-39.5-10.5-63.2-10.5c-23.7 0-46.4 5.1-63.6 10.5c-2.7 .8-5.2 1.7-7.5 2.5l2.5 45.6c1.4 25.4 22.5 45.3 47.9 45.3H464c26.5 0 48-21.5 48-48z"/></svg><i className="fas fa-glasses icon-wheelchair"></i>
            </div>
            <div>
              <div className="language-bar">
                {/* Language selection form */}
                <form
                  action="/c/portal/update_language?p_l_id=15&amp;redirect=%2Fapp"
                  className="form"
                  id="_com_liferay_site_navigation_language_web_portlet_SiteNavigationLanguagePortlet_INSTANCE_mainLang_fm"
                  method="post"
                  name="_com_liferay_site_navigation_language_web_portlet_SiteNavigationLanguagePortlet_INSTANCE_mainLang_fm"
                >
                  {/* Select dropdown for languages */}
                  <select
                    className="form-control migris-lang-select"
                    id="_com_liferay_site_navigation_language_web_portlet_SiteNavigationLanguagePortlet_INSTANCE_mainLang_fm"
                    name="languageId"
                    title="Language (Changing the value of this field reloads the page.)"
                  >
                    <option className="migris-lang-option" value="lt_LT" lang="lt-LT">
                      LT
                    </option>
                    <option className="migris-lang-option" selected value="en_US" lang="en-US">
                      EN
                    </option>
                  </select>
                </form>
              </div>
            </div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
              {/* Search container */}
              <div className="menu-search-container">
                <div className="search-container" id="searchContainer">
                  {/* Search form */}
                  {/* <form
                    action="https://www.migracija.lt/search"
                    className="form"
                    data-fm-namespace="_com_liferay_portal_search_web_search_bar_portlet_SearchBarPortlet_INSTANCE_templateSearch_"
                    id="_com_liferay_portal_search_web_search_bar_portlet_SearchBarPortlet_INSTANCE_templateSearch_fm"
                    method="get"
                    name="_com_liferay_portal_search_web_search_bar_portlet_SearchBarPortlet_INSTANCE_templateSearch_fm"
                  >
                    <div className="input-group search-bar-suggestions">
                      <div className="input-group-item">
                        <div className="input-group">
                          <input
                            aria-label="Search"
                            autoComplete="off"
                            data-qa-id="searchInput"
                            name="q"
                            placeholder="Search..."
                            title="Search"
                            className="form-control input-group-inset input-group-inset-after search-bar-keywords-input"
                            type="text"
                            value=""
                          />
                          <div className="input-group-inset-item input-group-inset-item-after">
                            <button className="btn btn-unstyled" type="submit" aria-label="Search">
                              <svg className="lexicon-icon lexicon-icon-search" role="presentation">
                                <use href="https://www.migracija.lt/o/e-migris-theme/images/clay/icons.svg#search"></use>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="emgr-main-nav">
        <nav className="sort-pages modify-pages site-navigation" id="navigation" role="navigation">
          <div className="navbar-left">
            {/* Site navigation menu */}
            <ul aria-label="Site Pages" className="navbar-blank navbar-nav navbar-site" role="menubar" id="yui_patched_v3_19_2_1_1712958880732_215">
              {/* List of navigation links */}
              <li className="lfr-nav-item nav-item" id="layout_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet_1" role="presentation">
                <a className="nav-link text-truncate" href="https://www.migracija.lt/home" role="menuitem" tabIndex="0" id="yui_patched_v3_19_2_1_1712958880732_234">
                  <span className="text-truncate">Home</span>
                </a>
              </li>
              <li className="lfr-nav-item nav-item" id="layout_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet_226" role="presentation">
						<a aria-labelledby="layout_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet_226" className="nav-link text-truncate active" href="https://www.migracija.lt/e-permit" role="menuitem" tabindex="0" id="yui_patched_v3_19_2_1_1712963708039_236">
							<span className="text-truncate"> E-permit </span>
						</a>

					</li>
                    <li className="lfr-nav-item nav-item" id="layout_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet_1" role="presentation">
                <a className="nav-link text-truncate" href="https://www.migracija.lt/home" role="menuitem" tabIndex="0" id="yui_patched_v3_19_2_1_1712958880732_234">
                  <span className="text-truncate">Service Information</span>
                </a>
              </li>
              <li className="lfr-nav-item nav-item" id="layout_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet_1" role="presentation">
                <a className="nav-link text-truncate" href="https://www.migracija.lt/home" role="menuitem" tabIndex="0" id="yui_patched_v3_19_2_1_1712958880732_234">
                  <span className="text-truncate">Brexit</span>
                </a>
              </li>
              <li className="lfr-nav-item nav-item" id="layout_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet_1" role="presentation">
                <a className="nav-link text-truncate" href="https://www.migracija.lt/home" role="menuitem" tabIndex="0" id="yui_patched_v3_19_2_1_1712958880732_234">
                  <span className="text-truncate">Quotas</span>
                </a>
              </li>
              <li className="lfr-nav-item nav-item" id="layout_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet_1" role="presentation">
                <a className="nav-link text-truncate" href="https://www.migracija.lt/home" role="menuitem" tabIndex="0" id="yui_patched_v3_19_2_1_1712958880732_234">
                  <span className="text-truncate">FAQ</span>
                </a>
              </li>
              <li className="lfr-nav-item nav-item" id="layout_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet_1" role="presentation">
                <a className="nav-link text-truncate" href="https://www.migracija.lt/home" role="menuitem" tabIndex="0" id="yui_patched_v3_19_2_1_1712958880732_234">
                  <span className="text-truncate">Survey</span>
                </a>
              </li>
              {/* Additional navigation items */}
            </ul>
          </div>
        </nav>
      </div>
    </div>
    </div>   
    </header>
  );
}

export default Header;

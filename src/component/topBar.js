import "./app.css"
function TopBar(){
   return(
<div className="preview__header"id="topBar">
  <div className="preview__env-logo">
{/* <img src="https://public-assets.envato-static.com/assets/icons/favicons/apple-touch-icon-72x72-precomposed-ea6fb08063069270d41814bdcea6a36fee5fffaba8ec1f0be6ccf3ebbb63dddb.png" alt="Logo" width="40"></img> */}
    <a className="header-env_market" href="https://themeforest.net/item/edusion-education-lms-wordpress-theme/49120881">Envato Market</a>
  </div>

  <div id="js-preview__actions" className="preview__actions">
  <div className="preview__action--buy">
    <a className="header-buy-now e-btn--3d -color-primary" href="https://themeforest.net/checkout/from_item/49120881?license=regular&amp;support=bundle_6month">Buy now</a>
  </div>
</div>
</div>
  
   );
}
export default TopBar
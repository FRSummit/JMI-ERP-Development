<template>
    <div id="product-details-details" class="product-details-details">
      <div class="layout-container">
        <div class="container-fluid">
          <div class="col-12 product-body">
                <div class="row product-header" style="margin-bottom: 0;"> 
                <!-- <div class="col-lg-6 col-12"> -->
                <div class="col-lg-6">
                    <div class="product-header-info"> 
                        <div class="product-img">
                            <a data-toggle="modal" data-target="#change-photo" >Change</a>
                            <img src="../../../../../assets/images/products/product_placeholder.png" alt="Image">
                        </div>
                        <div class="info" v-if="SELECTED_PROD_DETAILS">
                            <h5 class="product-name">{{ SELECTED_PROD_DETAILS ? (SELECTED_PROD_DETAILS.product_info ? SELECTED_PROD_DETAILS.product_info.prod_name : '') : '' }}<span class="tag">{{ SELECTED_PROD_DETAILS ? (SELECTED_PROD_DETAILS.prod_class_info ? SELECTED_PROD_DETAILS.prod_class_info.element_name : '') : '' }}</span></h5>
                            <p class="generic-name" v-for="(element, i) in SELECTED_PROD_DETAILS ? (SELECTED_PROD_DETAILS.prod_attr_element) : 0" :key="i">{{ element.element_name }}{{ checkElementLengthToSetComma(i, element) }}</p>
                            <p class="product-code">Code: <span>{{ SELECTED_PROD_DETAILS ? (SELECTED_PROD_DETAILS.product_info ? SELECTED_PROD_DETAILS.product_info.prod_code : '') : '' }}</span></p>
                        </div>
                        <!-- Start Change Photo Modal -->
                            <div class="modal" id="change-photo" tabindex="-1" role="dialog" aria-labelledby="changePhoto" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="changePhoto">Change Photo</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="changePhotoModalCloseClickHandler" style="width: 50px;">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <form class="modal-body">
                                            <div class="form-group">
                                                <input type="file" class="form-control-file" id="exampleFormControlFile1">
                                            </div>
                                        </form>
                                        <div class="modal-footer justify-content-center">
                                            <button type="button" class="btn btn-primary" @click="changePhotoSaveBtnClickHandler">Save Changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Start Change Photo Modal -->
                        </div>
                    </div>
                    
                    <!-- <div class="col-lg-6 col-12 d-flex align-items-center justify-content-end"> -->
                    <div class="col-lg-6 d-flex align-items-center justify-content-end">
                        <!-- <a @click="createNewProductClickHandler"> <button type="button" class="btn btn-primary btn-global"> <i class="fa fa-plus mr-2"> </i>Add Product</button></a> -->
                        <button type="button" class="btn-global create-product" data-toggle="modal" data-target="#classification-modal" @click="addProductBtnClickHandler"><i class="fa fa-plus mr-2"> </i>Add Product</button>
                    </div>

                    <!-- Start Classification Modal Area -->
                    <div class="modal" id="classification-modal" tabindex="-1" role="dialog" aria-labelledby="classification" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-lg" role="document" style="margin: 0; display: contents;">
                            <div class="modal-content" style="padding: 14px 0; border: 0;">
                                <div class="modal-header">
                                    <h5 class="modal-title">Add Product</h5>
                                    <button type="button" id="classification-modal-close-btn" class="close" data-dismiss="modal" aria-label="Close" style="width: 50px;">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="row" style="margin-bottom: 0;">
                                        <div class="col-6" style="padding-top: 0; padding-bottom: 0;">
                                            <div class="product-list" style="padding-top: 0; padding-bottom: 0;">
                                                <div class="form-group" style="padding-left: 0; padding-right: 0;"><i class="fa fa-search"> </i><input type="text" placeholder="Search by Name, ID No" id="products-modal-search-filter" v-on:keyup="searchKeyUpHandlerProductModal" class="form-control" style="padding-left: 30px;"></div>
                                                <div class="product-list-inner" style="margin-top: 0;">
                                                    <div class="product-card2" v-for="(item, i) in PRODUCTS_LIST" :key="i" @click="singleProductClickFromProductList_ProductModal(item)">
                                                        <div class="row1"><h5>{{ item.prod_name }}</h5> <p>Code: <span>{{ item.prod_code }}</span></p></div>
                                                        <div class="row2"><p><span v-for="(elem, j) in item.element" :key="j">{{ elem.element_name }}{{ checkElementLengthToSetComma(j, item.element) }}</span></p></div>
                                                        <p class="jmi-search-key hide">{{ createSearchString(item) }}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6" style="padding-top: 0; padding-bottom: 0;">
                                            
                                            <div class="product-list" style="padding-top: 0; padding-bottom: 0;">
                                            </div>
                                            <div class="product-selected" v-for="(item, i) in SELECTED_PRODUCTS_LIST__PRODUCT_MODAL" :key="i">
                                                <div class="row1"><h5>{{ item.prod_name }}</h5> <p>Code: <span>{{ item.prod_code }}</span></p></div>
                                                <div class="row2"><p><span v-for="(elem, j) in item.element" :key="j">{{ elem.element_name }}</span></p></div>
                                            </div>
                                            <div class="form-group">
                                                <label for="product_class">Product Class</label>
                                                <select class="form-control" id="priority_class_prod_modal" v-model="prod_class_id_prod_modal" @change="onChangeProdClassIdProdModal">
                                                    <option :value="null" selected>Select Class</option>
                                                    <option v-for="(item, i) in PRIORITY_CLASS_PRODUCTS_MODAL" :key="i" :value="item.id">{{ item.element_name }}</option>
                                                </select>
                                            </div>

                                            <!-- <div class="form-group mt-2">
                                                <label for="product_class">Product Class</label>
                                                <select class="form-control" id="unit">
                                                    <option>Select Class</option>
                                                    <option>High Priority</option>
                                                    <option>Star Priority</option>
                                                    <option>Low Priority</option>
                                                    <option>New Product</option>
                                                </select>
                                            </div> -->
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer justify-content-center">
                                    <button type="button" class="btn btn-primary btn-global modal-prod-save-btn" @click="saveNewSBUProductClickHandler">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End Classification Modal Area -->
                </div>

                <div id="progressbar" class="jmi-progressbar" v-if="!SELECTED_PROD_DETAILS">
                    <!-- <v-progress-circular indeterminate color="primary"></v-progress-circular> -->
                    <p>Please select a product</p>
                </div>

                <div class="row product-details-tab" v-if="SELECTED_PROD_DETAILS">
                    <div class="col-12">
                        <ul class="nav nav-tabs nav-justified" id="xxxs" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="details-single-tab" data-toggle="tab" href="#tab-basic">Basic</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="details-single-tab" data-toggle="tab" href="#tab-detail-attributes">Detail</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="details-single-tab" data-toggle="tab" href="#tab-pricing">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="details-single-tab" data-toggle="tab" href="#tab-offers">Offers</a>
                            </li>
                            <!-- <li class="nav-item">
                                <a class="nav-link" id="details-single-tab" data-toggle="tab" href="#tab-competitors">Competitors</a>
                            </li> -->
                            <li class="nav-item">
                                <a class="nav-link" id="details-single-tab" data-toggle="tab" href="#tab-ledger">Ledger</a>
                            </li>
                            <li class="nav-item">
                                <!-- <a class="nav-link disabled" id="details-single-tab" data-toggle="tab" href="#tab-stock-position">Stock Position</a> -->
                                <a class="nav-link" id="details-single-tab" data-toggle="tab" href="#tab-stock-position">Stock Position</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="details-single-tab" data-toggle="tab" href="#tab-documents">Documents</a>
                            </li>
                        </ul>

                        <!-- Tab panes -->
                        <div class="tab-content">
                            <!------------ Start Product Basic Tab Content Area ------------>
                            <div id="tab-basic" class="tab-pane active">
                                <!-- <div class="tab-content-header">
                                    <h5>Product Information</h5>
                                    <div class="btn-group">
                                        <button class="btn btn-primary btn-save" @click="saveBtnClickHandler" role="button">Save</button>
                                        <a class="btn-edit btn-active" @click="editBtnClickHandler"><i class="zmdi zmdi-edit"></i></a>
                                    </div>
                                </div> -->
                                <form class="inner-scroll">
                                    <div class="row">
                                        <div class="col-lg-9 form-group">
                                            <label for="product-description">Product Description</label>
                                            <textarea v-model="product_description" class="form-control" id="product-description" rows="3" placeholder="Enter Product Description"></textarea>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-3 form-group">
                                            <label for="product_name">Product Name</label>
                                            <input type="text" v-model="product_name" class="form-control" id="product_name" placeholder="Enter Product Name">
                                        </div>
                                        <div class="col-lg-3 form-group">
                                            <label for="product_group">Product Group</label>
                                            <input type="text" v-model="product_group" class="form-control" id="product_group" placeholder="Enter Product Group">
                                        </div>
                                        <div class="col-lg-3 form-group">
                                            <label for="other_code">Other Code</label>
                                            <input type="text" v-model="other_code" class="form-control" id="other_code" placeholder="Enter Other Code">
                                        </div>
                                        <div class="col-lg-3 form-group">
                                            <label for="product_type">Product Type</label>
                                            <input type="text" v-model="product_type" class="form-control" id="product_type" placeholder="Enter Product Type">
                                        </div>
                                        <div class="col-lg-3 form-group">
                                            <label for="product_code">Product Code</label>
                                            <input type="text" v-model="product_code" class="form-control" id="product_code" placeholder="Enter Product Code">
                                        </div>
                                        <div class="col-lg-3 form-group">
                                            <label for="old_code">Old Code</label>
                                            <input type="text" v-model="old_code" class="form-control" id="old_code" placeholder="Enter Old Code">
                                        </div>
                                        <div class="col-lg-3 form-group">
                                            <label for="manufacturer">Manufacturer</label>
                                            <input type="text" v-model="manufacture" class="form-control" id="manufacturer" placeholder="Enter Manufacturer Name">
                                        </div>
                                        <div class="col-lg-3 form-group">
                                            <label for="vendor">Vendor</label>
                                            <input type="text" v-model="vendor" class="form-control" id="vendor" placeholder="Enter Vendor Name">
                                        </div>
                                        <div class="col-lg-3 form-group">
                                            <label for="4p_code">4P Code</label>
                                            <input type="text" v-model="code_4p" class="form-control" id="4p_code" placeholder="Enter 4P Code">
                                        </div>
                                        <div class="col-lg-3 form-group">
                                            <label for="country_origin">Country Origin</label>
                                            <input type="text" v-model="country_origin" class="form-control" id="country_origin" placeholder="Enter Country Origin">
                                        </div>
                                        <div class="col-lg-3 form-group">
                                            <label for="batch_size">Batch Size</label>
                                            <input type="text" v-model="batch_size" class="form-control" id="batch_size" placeholder="Batch Size">
                                        </div>
                                        <div class="col-lg-3 form-group">
                                            <label for="cost_goods_per_unit">Cost of Goods per Unit</label>
                                            <input type="text" v-model="cost_goods_per_unit" class="form-control" id="cost_goods_per_unit" placeholder="Enter Cost of Goods per Unit">
                                        </div>
                                        <div class="col-lg-3 form-group">
                                            <label for="commercial_unit_measure">Commercial Unit of Measure</label>
                                            <input type="text" v-model="commercial_unit_measure" class="form-control" id="commercial_unit_measure" placeholder="Enter Commercial Unit of Measure">
                                        </div>
                                        <div class="col-lg-3 form-group">
                                            <label for="ims_code">IMS Code</label>
                                            <input type="text" v-model="ims_code" class="form-control" id="ims_code" placeholder="Enter IMS Code">
                                        </div>
                                        <div class="col-lg-3 form-group">
                                            <label for="commercial_unit_measure_quantity">Commercial Unit of Measure Quantity</label>
                                            <input type="text" v-model="commercial_unit_measure_quantity" class="form-control" id="commercial_unit_measure_quantity" placeholder="Enter Commercial Unit of Measure Quantity">
                                        </div>
                                        <div class="col-lg-3 form-group">
                                            <label for="commercial_pack_size">Commercial Pack Size</label>
                                            <input type="text" v-model="commercial_pack_size" class="form-control" id="commercial_pack_size" placeholder="Enter Commercial Pack Size">
                                        </div>
                                        <div class="col-lg-3 form-group">
                                            <label for="hs_code">HS Code</label>
                                            <input type="text" v-model="hs_code" class="form-control" id="hs_code" placeholder="Enter HS Code">
                                        </div>
                                        <div class="col-lg-3 form-group">
                                            <label for="export_unit_measure">Export Unit of Measure</label>
                                            <input type="text" v-model="export_unit_measure" class="form-control" id="export_unit_measure" placeholder="Enter Export Unit of Measure">
                                        </div>
                                        <div class="col-lg-3 form-group">
                                            <label for="export_pack_size">Export Pack Size</label>
                                            <input type="text" v-model="export_pack_size" class="form-control" id="export_pack_size" placeholder="Enter Export Pack Size">
                                        </div>
                                        <div class="col-lg-3 form-group">
                                            <label for="total_stock">Total Stock</label>
                                            <input type="text" v-model="total_stock" class="form-control" id="total_stock" placeholder="Enter Total Stock">
                                        </div>
                                        <div class="col-lg-3 form-group">
                                            <label for="owner_sbu_id">Owner SBU ID</label>
                                            <input type="text" v-model="owner_sbu_id" class="form-control" id="owner_sbu_id" placeholder="Enter Owner SBU ID">
                                        </div>
                                        <div class="col-lg-3 form-group">
                                            <label for="shelf_life">Shelf Life</label>
                                            <input type="text" v-model="shelf_life" class="form-control" id="shelf_life" placeholder="Enter Shelf Life">
                                        </div>
                                        <div class="col-lg-3 form-group">
                                            <label for="imported_from">Imported From</label>
                                            <input type="text" v-model="imported_from" class="form-control" id="imported_from" placeholder="Enter Imported From">
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <!------------ End Product Basic Tab Content Area ------------>

                            <!------------ Start Detail Attributes Tab Content Area ------------>    
                            <div id="tab-detail-attributes" class="tab-pane">
                                <div class="row attributes-vertical-tab">
                                    <div class="col-lg-3">
                                        <div class="attribute-list">
                                            <div class="attribute-list-header">
                                                <h5>Manage Attributes</h5>
                                                <a class="menu" data-toggle="modal" data-target="#manage-attribute-modal"><i class="fa fa-list"></i></a>
                                            </div>

                                            <ul class="nav nav-tabs flex-column" id="attribute-items">
                                                <li class="nav-item">
                                                    <a class="nav-link active" id="attr-single-items" href="#attribute1" data-toggle="tab">Strength</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" id="attr-single-items" href="#attribute2" data-toggle="tab">Generic Name</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" id="attr-single-items" href="#attribute3" data-toggle="tab">Therapeutic Class</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" id="attr-single-items" href="#attribute4" data-toggle="tab">Dosage &amp; Administration</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <!-- Start Manage Attribute Modal -->
                                        <div class="modal" id="manage-attribute-modal" tabindex="-1" role="dialog" aria-labelledby="manageattribute" aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-centered modal-lg" role="document" style="margin: 0;">
                                                <div class="modal-content" style="border: none;">
                                                <div class="modal-header">
                                                    <h5 class="modal-title">Manage Attribute</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <div id="manage-attribute-tab">
                                                        <ul class="nav nav-tabs  mb-3" id="lineTab" role="tablist">
                                                            <li class="nav-item">
                                                                <a class="nav-link active" id="underline-home-tab" data-toggle="tab" href="#add-attribute" role="tab"
                                                                    aria-controls="add-attribute" aria-selected="true">Add Attribute</a>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a class="nav-link" id="create-attribute-tab" data-toggle="tab" href="#create-attribute" role="tab"
                                                                    aria-controls="create-attribute" aria-selected="false">Create New Attribute</a>
                                                            </li>
                                                        </ul>
                                                    
                                                        <div class="tab-content">

                                                        <div class="tab-pane fade show active" id="add-attribute" role="tabpanel" aria-labelledby="add-attribute-tab">
                                                            <div class="single-tag">
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                                                    <label class="form-check-label" for="flexCheckDefault">Indication</label>
                                                                </div>
                                                            </div>
                                                            
                                                            <div class="single-tag">
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheck1">
                                                                    <label class="form-check-label" for="flexCheck1">Therapeutic Class</label>
                                                                </div>
                                                            </div>
                                                            
                                                            <div class="single-tag">
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheck2">
                                                                    <label class="form-check-label" for="flexCheck2">Therapeutic Class</label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="tab-pane fade" id="create-attribute" role="tabpanel" aria-labelledby="create-attribute-tab">
                                                        <div class="row">
                                                            <div class="col-lg-4 form-group">
                                                                <label for="indiction_1">Attribute For</label>
                                                                <select class="form-control" id="unit">
                                                                    <option>This Product</option>
                                                                    <option>Global Attribute</option>
                                                                    <option>Box 2</option>
                                                                    <option>Box 3</option>
                                                                </select>
                                                            </div>

                                                            <div class="col-lg-8 form-group">
                                                                <label for="imported_from">Attribute Title</label>
                                                                <input type="text" class="form-control" id="attribute-title" placeholder="Enter Attribute Title">
                                                            </div>
                                                            <div class="col-lg-12 form-group">
                                                                <label for="indiction_1">Attribute Description</label>
                                                                <textarea class="form-control" id="attribute-description" rows="6" placeholder="Enter Attribute Description"></textarea>
                                                            </div>
                                                        </div>
                                                        </div>
                    
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer justify-content-center">
                                                    <button type="button" class="btn btn-primary btn-global">Save Changes</button>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End Manage Attribute Modal -->
                                    </div>
                                    <div class="col-lg-9">
                                        <div class="tab-content attribute-content">

                                            <div class="tab-pane active" id="attribute1">
                                                <div class="attribute-header">
                                                    <h5>Strength</h5>
                                                    <!-- <a class="btn-edit btn-active" ><i class="fa fa-pencil" aria-hidden="true"></i></a> -->
                                                    <a class="btn-edit btn-active"><i class="zmdi zmdi-edit"></i></a>
                                                </div>
                                                <div class="row">
                                                    <div class="col-lg-12 form-group">
                                                        <label for="indiction_1">Strength</label>
                                                        <textarea class="form-control" v-model="prod_dtl_element_strength" id="indiction_1" rows="6" placeholder="Enter Product Indiction" readonly></textarea>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="tab-pane" id="attribute2">
                                                <div class="attribute-header">
                                                    <h5>Generic Name</h5>
                                                    <a class="btn-edit" ><i class="zmdi zmdi-edit"></i></a>
                                                </div>
                                                <div class="row">
                                                    <div class="col-lg-12 form-group">
                                                        <label for="indiction_1">Generic Name</label>
                                                        <textarea class="form-control" v-model="prod_dtl_element_generic_name" id="indiction_1" rows="6" placeholder="Enter Product Indiction" readonly></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane" id="attribute3">
                                                <div class="attribute-header">
                                                    <h5>Therapeutic Class</h5>
                                                    <a class="btn-edit" ><i class="zmdi zmdi-edit"></i></a>
                                                </div>
                                                <div class="row">
                                                    <div class="col-lg-12 form-group">
                                                        <label for="indiction_1">Therapeutic Class</label>
                                                        <textarea class="form-control" v-model="prod_dtl_element_thrp_class" id="indiction_1" rows="6" placeholder="Enter Product Indiction" readonly></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane" id="attribute4">
                                                <div class="attribute-header">
                                                    <h5>Dosage &amp; Administration</h5>
                                                    <a class="btn-edit" ><i class="zmdi zmdi-edit"></i></a>
                                                </div>
                                                <div class="row">
                                                    <div class="col-lg-12 form-group">
                                                        <label for="indiction_1">Dosage &amp; Administration</label>
                                                        <textarea class="form-control" v-model="prod_dtl_element_dosage_form" id="indiction_1" rows="6" placeholder="Enter Product Indiction" readonly></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!------------ End Detail Attributes Tab Content Area ------------>
                            
                            <!------------ Start Pricing Tab Content Area ------------>
                            <div id="tab-pricing" class="tab-pane">
                                <div class="tab-content-header">
                                    <!-- <h5>Product Information</h5> -->
                                    <h5></h5>
                                    <div class="btn-group">
                                        <button class="btn btn-primary btn-save hide" role="button">Save</button>
                                        <a class="btn-edit btn-active" data-toggle="modal" data-target=".edit-price-modal" @click="updateProdPriceEditBtnClickHandler"><i class="zmdi zmdi-edit"></i></a>
                                    </div>
                                    <!-- <div class="btn-group">
                                        <button class="btn btn-primary btn-create" data-toggle="modal" data-target=".create-offer-modal" role="button"><i class="fa fa-plus" aria-hidden="true" style="margin-right: 4px;"></i> Create Offer</button>
                                    </div> -->
                                    <!------------ Start Price Edit Modal------------>
                                    <!-- <div class="modal create-offer-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="width: 70%; height: 302px;"> -->
                                    <div id="modal_edit_price_modal" class="modal edit-price-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="width: 70%;">
                                        <div class="modal-dialog modal-lg modal-dialog-centered" style="margin: 0; max-width: unset;">
                                            <div class="modal-content" style="border: none;">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalCenterTitle">Update Price</h5>
                                                    <button type="button" id="price_tab_close_modal" class="close" data-dismiss="modal" aria-label="Close" @click="offerTabCloseBtnClickHandler">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="row">
                                                        <div class="col-lg-4 form-group">
                                                            <label for="update_prod_trade_price">Trade Price</label>
                                                            <input v-model="update_prod_trade_price" type="number" class="form-control" id="update_prod_trade_price" placeholder="">
                                                        </div>
                                                        <div class="col-lg-4 form-group">
                                                            <label for="update_prod_manufacture_price">Manufacture Price</label>
                                                            <input v-model="update_prod_manufacture_price" type="number" class="form-control" id="update_prod_manufacture_price" placeholder="">
                                                        </div>
                                                        <div class="col-lg-4 form-group">
                                                            <label for="update_prod_maximum_retail_price">Maximum Retail Price</label>
                                                            <input v-model="update_prod_maximum_retail_price" type="number" class="form-control" id="update_prod_maximum_retail_price" placeholder="">
                                                        </div>
                                                        <div class="col-lg-4 form-group">
                                                            <label for="update_prod_maximum_trade_price">Maximum Trade Price</label>
                                                            <input v-model="update_prod_maximum_trade_price" type="number" class="form-control" id="update_prod_maximum_trade_price" placeholder="">
                                                        </div>
                                                        <div class="col-lg-4 form-group">
                                                            <label for="update_prod_minimum_trade_price">Minimum Trade Price</label>
                                                            <input v-model="update_prod_minimum_trade_price" type="number" class="form-control" id="update_prod_minimum_trade_price" placeholder="">
                                                        </div>
                                                        <div class="col-lg-4 form-group">
                                                            <label for="update_prod_vat_price">Vat</label>
                                                            <input v-model="update_prod_vat_price" type="number" class="form-control" id="update_prod_vat_price" placeholder="">
                                                        </div>
                                                        <div class="col-lg-4 form-group">
                                                            <label for="update_prod_vat_ptc_price">Vat PTC</label>
                                                            <input v-model="update_prod_vat_ptc_price" type="number" class="form-control" id="update_prod_vat_ptc_price" placeholder="">
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="modal-footer justify-content-center">
                                                    <button type="button" class="btn btn-primary btn-global" @click="updateProdPriceClickHandler">Update Price</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!------------ End Price Edit Modal------------>
                                </div>

                                <div class="row">
                                    <div class="col-lg-3 form-group">
                                        <label for="trade_price">Trade Price</label>
                                        <input type="number" v-model="prod_price_tab_trade_price" class="form-control" id="trade_price" placeholder="Enter Trade Price" readonly>
                                    </div>
                                    <div class="col-lg-3 form-group">
                                        <label for="manufacture_price">Manufacture Price</label>
                                        <input type="number" v-model="prod_price_tab_manufacture_price" class="form-control" id="manufacture_price" placeholder="Enter Manufacture Price" readonly>
                                    </div>
                                    <div class="col-lg-3 form-group">
                                        <label for="maximum_retail_price">Maximum Retail Price</label>
                                        <input type="number" v-model="prod_price_tab_max_retail_price" class="form-control" id="maximum_retail_price" placeholder="Enter Maximum Retail Price" readonly>
                                    </div>
                                    <div class="col-lg-3 form-group">
                                        <label for="maximum_trade_price">Maximum Trade Price</label>
                                        <input type="number" v-model="prod_price_tab_max_trade_price" class="form-control" id="maximum_trade_price" placeholder="Enter Maximum Trade Price" readonly>
                                    </div>
                                    <div class="col-lg-3 form-group">
                                        <label for="minimum_trade_price">Minimum Trade Price</label>
                                        <input type="number" v-model="prod_price_tab_min_trade_price" class="form-control" id="minimum_trade_price" placeholder="Enter Minimum Trade Price" readonly>
                                    </div>
                                    <div class="col-lg-3 form-group">
                                        <label for="vat">Vat</label>
                                        <input type="number" v-model="prod_price_tab_vat" min="0" max="100" class="form-control" id="vat" placeholder="Enter Vat" readonly>
                                    </div>
                                    <div class="col-lg-3 form-group">
                                        <label for="vat_ptc">Vat PTC</label>
                                        <input type="number" v-model="prod_price_tab_vat_pct" class="form-control" id="vat_ptc" placeholder="Enter Vat PTC" readonly>
                                    </div>
                                </div>
                            </div>
                            <!------------ End Pricing Tab Content Area ------------>

                            <!------------ Start Offers Tab Content Area ------------>
                            <div id="tab-offers" class="tab-pane">
                                <div class="tab-content-header">
                                    <!-- <h5>Offers</h5> -->
                                    <h5></h5>
                                    <div class="btn-group">
                                        <button class="btn btn-primary btn-create" data-toggle="modal" data-target=".create-offer-modal" role="button" @click="createOfferBtnClickHandler"><i class="fa fa-plus" aria-hidden="true" style="margin-right: 4px;"></i> Create Offer</button>
                                    </div>
                                    <!------------ Start Create Offer Modal------------>
                                    <!-- <div class="modal create-offer-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="width: 70%; height: 302px;"> -->
                                    <div id="modal_create_offer_modal" class="modal create-offer-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="width: 70%;">
                                        <div class="modal-dialog modal-lg modal-dialog-centered" style="margin: 0; max-width: unset;">
                                            <div class="modal-content" style="border: none;">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalCenterTitle">{{ UPDATE_OFFER_ENABLE === false ? ( 'Create Offer for ' + (SELECTED_PROD_DETAILS.product_info ? SELECTED_PROD_DETAILS.product_info.prod_name : '') ) : ( 'Update Offer for ' + (SELECTED_PROD_DETAILS.product_info ? SELECTED_PROD_DETAILS.product_info.prod_name : '') ) }}</h5>
                                                    <button type="button" id="offer_tab_close_modal" class="close" data-dismiss="modal" aria-label="Close" @click="offerTabCloseBtnClickHandler">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="row">
                                                        <div class="col-lg-4 form-group">
                                                            <label for="offer_type">Offer Type</label>
                                                            <select class="form-control" id="offer_type" v-model="offer_type_offers_modal" @change="onChangeOfferTypeOfferModal">
                                                                <option :value="null" selected>Select an option</option>
                                                                <!-- <option v-for="(item, i) in OFFERS" :key="i" :value="item.name"><span v-if="OFFERS_LIST[i].offer_name !== item.name">{{ item.name }}</span></option> -->
                                                                <option v-for="(item, i) in OFFERS" :key="i" :value="item.name">
                                                                    <!-- <span v-if="OFFERS_LIST.length ? true : false">
                                                                        <span v-for="(offer, j) in OFFERS_LIST" :key="j">
                                                                            <span>{{ item.name }}</span>
                                                                        </span>
                                                                    </span>
                                                                    <span v-else>
                                                                        <span>{{ item.name }}</span>
                                                                    </span> -->
                                                                    <span>{{ item.name }}</span>
                                                                </option>
                                                            </select>
                                                        </div>
                                                        <div class="col-lg-4 form-group">
                                                            <label for="offer_name">Offer Name</label>
                                                            <input v-model="offer_type_offers_modal" type="text" class="form-control" id="offer_name" placeholder="Enter Offer Name" readonly>
                                                        </div>
                                                        <div class="col-lg-4 form-group">
                                                            <label for="date_range">Start &amp; End Date</label>
                                                            <!-- <input type="date" class="form-control" id="date_range" placeholder="DD/MM/YY - DD/MM/YY"> -->
                                                            <!-- <input type="text" name="daterange" value="01/01/2018 - 01/15/2018" /> -->
                                                            <!-- <div class="date-range">
                                                                <div class="date-range-inner"> -->
                                                                    <!-- <p>
                                                                        <span>Date Range</span> -->
                                                                        <date-picker v-model="range" lang="en" range type="date" format="YYYY-MM-DD" width="500"></date-picker>
                                                                    <!-- </p> -->
                                                                <!-- </div>
                                                            </div> -->
                                                        </div>
                                                    </div>

                                                    
                                                    <!-- Percentage Discount -->
                                                    <!-- <div class="row" id="percentage_discount" style="display: none;"> -->
                                                    <div class="row hide" id="percentage_discount">
                                                        <div class="col-12 hide"><h5>Percentage Discount</h5><hr></div>
                                                        <div class="col-lg-4 form-group">
                                                            <label for="quantity">Minimum Buy QTY</label>
                                                            <div class="input-group">
                                                                <input v-model="prod_offer_minimum_qty" type="number" class="form-control" placeholder="" aria-describedby="addon1" required>
                                                                <div class="input-group-append">
                                                                <span class="input-group-text" id="addon1">{{ prod_offer_pack_size ? prod_offer_pack_size : 'Other' }}</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="col-lg-4 form-group">
                                                            <label for="discount">Discount</label>
                                                            <div class="input-group">
                                                                <input v-model="prod_offer_discount_p" type="number" class="form-control" placeholder="Enter Discount" aria-describedby="basic-addon2" required>
                                                                <div class="input-group-append">
                                                                <span class="input-group-text" id="basic-addon2">%</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <!-- Fixed Discount -->
                                                    <!-- <div class="row" id="fixed_discount" style="display: none;"> -->
                                                    <div class="row hide" id="fixed_discount">
                                                        <div class="col-12 hide"><h5>Fixed Discount</h5><hr></div>
                                                        <div class="col-lg-4 form-group">
                                                            <label for="offer_name">Now Price</label>
                                                            <div class="input-group">
                                                                <input v-model="prod_offer_now_price_d" type="number" class="form-control" placeholder="" aria-describedby="addon1" required>
                                                                <div class="input-group-append">
                                                                <span class="input-group-text" id="addon1">TK</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 form-group">
                                                            <label for="offer_name">For</label>
                                                            <div class="input-group">
                                                                <input v-model="prod_offer_for_d" type="number" class="form-control" placeholder="" aria-describedby="addon1" required>
                                                                <div class="input-group-append">
                                                                    <span class="input-group-text" id="addon1">{{ prod_offer_pack_size ? prod_offer_pack_size : 'Other' }}</span>
                                                                </div>
                                                                <!-- <button type="button" class="btn btn-primary btn-global" style="position: absolute; bottom: 20px;">Save Flat Rate</button> -->
                                                            </div>
                                                        </div>
                                                        <!-- <div class="col-lg-2 form-group">
                                                            <button type="button" class="btn btn-primary btn-global" style="position: absolute; bottom: 20px; background-color: #495057;">Save Flat Rate</button>
                                                        </div> -->
                                                        <div class="col-lg-4 form-group">
                                                            <label for="offer_name">Minimum Buy QTY</label>
                                                            <div class="input-group">
                                                                <input v-model="prod_offer_for_d" type="number" class="form-control" placeholder="" aria-describedby="addon1" readonly>
                                                                <div class="input-group-append">
                                                                <span class="input-group-text" id="addon1">{{ prod_offer_pack_size ? prod_offer_pack_size : 'Other' }}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 form-group">
                                                            <label for="date_range">Discount TP</label>
                                                            <div class="input-group">
                                                                <input v-model="prod_offer_discount_tp_d" type="number" class="form-control" placeholder="Enter Discount" aria-describedby="basic-addon2" readonly>
                                                                <div class="input-group-append">
                                                                <span class="input-group-text" id="basic-addon2">TK</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <!-- Bonus Product -->
                                                    <!-- <div class="row" id="bonus_product" style="display: none;"> -->
                                                    <div class="row hide" id="bonus_product">
                                                        <div class="col-12 hide"><h5>Bonus Product</h5><hr></div>
                                                        <div class="col-lg-4 form-group">
                                                            <label for="offer_name">Minimum Buy QTY</label>
                                                            <div class="input-group">
                                                                <input v-model="prod_offer_min_qty_b" type="number" class="form-control" placeholder="" aria-describedby="addon1" required>
                                                                <div class="input-group-append">
                                                                    <span class="input-group-text" id="addon1">{{ prod_offer_pack_size ? prod_offer_pack_size : 'Other' }}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 form-group">
                                                            <label for="date_range">Bonus QTY</label>
                                                            <div class="input-group">
                                                                <input v-model="prod_offer_bonus_qty_b" type="number" class="form-control" placeholder="" aria-describedby="addon1" required>
                                                                <div class="input-group-append">
                                                                    <span class="input-group-text" id="addon1">Box</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- Free Product -->
                                                    <!-- <div class="row" id="free_product" style="display: none;"> -->
                                                    <div class="row hide" id="free_product">
                                                        <div class="col-12 hide"><h5>Free Product</h5><hr></div>
                                                        <div class="col-lg-4 form-group">
                                                            <label for="offer_name">Minimum Buy QTY</label>
                                                            <div class="input-group">
                                                                <input v-model="prod_offer_min_qty_f" type="number" class="form-control" placeholder="" aria-describedby="addon1" required>
                                                                <div class="input-group-append">
                                                                <span class="input-group-text" id="addon1">{{ prod_offer_pack_size ? prod_offer_pack_size : 'Other' }}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 form-group">
                                                            <label for="date_range">Free Product</label>
                                                            <select class="form-control" v-model="free_prod_offer_selected_prod">
                                                                <option value="null" selected>Select Product</option>
                                                                <option v-for="(item, i) in ALL_PRODS_LIST_IN_DB" :key="i" :value="item.prod_id">{{ item.prod_name }}</option>
                                                                <!-- <option value="">Product 2</option>
                                                                <option value="">Product 3</option>
                                                                <option value="">Product 4</option> -->
                                                            </select>
                                                        </div>
                                                        <div class="col-lg-4 form-group">
                                                            <label for="date_range">Free QTY</label>
                                                            <div class="input-group">
                                                                <input v-model="prod_offer_free_qty_f" type="number" class="form-control" placeholder="" aria-describedby="addon1" required>
                                                                <div class="input-group-append">
                                                                <span class="input-group-text" id="addon1">{{ prod_offer_pack_size ? prod_offer_pack_size : 'Other' }}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <!-- <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Save changes</button>
                                                </div> -->
                                                <div class="modal-footer justify-content-center">
                                                    <button type="button" class="btn btn-primary btn-global" @click="createOfferClickHandler" v-if="UPDATE_OFFER_ENABLE === false">Create Offer</button>
                                                    <button type="button" class="btn btn-primary btn-global" @click="updateOfferClickHandler" v-if="UPDATE_OFFER_ENABLE === true">Update Offer</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!------------ End Create Offer Modal------------>
                                </div>

                                <table class="table offer-table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Offer Type</th>
                                            <th scope="col">Min Qty</th>
                                            <th scope="col">Disc(%)</th>
                                            <th scope="col">Disc(TP)</th>
                                            <th scope="col">Bonus On</th>
                                            <th scope="col">Bonus Qty</th>
                                            <th scope="col">Free Required Qty</th>
                                            <th scope="col">Free Prod</th>
                                            <th scope="col">Free Qty</th>
                                            <th scope="col">Discount Period</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item, i) in OFFERS_LIST" :key="i">
                                            <td>{{ checkOfferType_Short(item.offer_type) }}</td>
                                            <td>{{ item.min_qty }}</td>
                                            <td>{{ item.discount_pct }}</td>
                                            <td>{{ item.discount_tp }}</td>
                                            <td>{{ item.bonus_on }}</td>
                                            <td>{{ item.bonus_qty }}</td>
                                            <td>{{ item.free_req_qty }}</td>
                                            <td>{{ getProdNameById(item.free_prod_id) }}</td>
                                            <td>{{ item.free_prod_qty }}</td>

                                            <td>{{ item.offer_discount_period }}</td>

                                            <!-- <td><p class="status" :class="item.offer_status === 'Active' ? 'active' : 'inactive'"> <i class="fa fa-square mr-1" aria-hidden="true"></i>{{ item.offer_status === 'Active' ? 'Active' : 'Inactive' }}</p></td> -->
                                            <!-- <td><input type="checkbox" :checked="item.is_active === 'Y' ? true : false"></td> -->
                                            <td><span :class="createTableStatusClass(item)"><i class="zmdi zmdi-check-square"></i></span></td>
                                            <td class="action-btn">
                                                <span><a class="btn-edit btn-active" style="width: 20px; border-radius: 50%; cursor: pointer;" @click="offerEditClickHandler(item, i)"><i class="zmdi zmdi-edit"></i></a></span>
                                                <!-- <span @click="offerEditClickHandler(item, i)"><i class="zmdi zmdi-edit"></i></span> -->
                                                
                                                <!-- <span class="active fa fa-arrow-up" data-toggle="tooltip" data-placement="bottom" title="Active"></span> -->
                                                <i class="zmdi zmdi-delete" @click="offerDeleteClickHandler(item, i)"></i>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <!------------ End Offers Tab Content Area ------------>

                            <!------------ Start Competitors Tab Content Area ------------>    
                            <div id="tab-competitors" class="tab-pane">
                                <div class="tab-content-header">
                                    <h5></h5>
                                    <div class="btn-group">
                                        <button class="btn btn-primary btn-save"  role="button">Save</button>
                                        <a class="btn-edit btn-active" ><i class="zmdi zmdi-edit"></i></a>
                                    </div>
                                </div>
                                <div class="scroll-competitor-list">
                                    <div class="row">
                                    <!-- Start Competitorr Card Area --> 
                                    <div class="col-lg-3 col-md-6 col-12 jmi-padding-0-10">
                                        <div class="competitor-card">
                                            <div class="product-info"> 
                                                <img class="product-img" src="../../../../../assets/images/avater.png" alt="Image">
                                                <div class="info">
                                                    <p class="product-name">Atopen 500mg</p>
                                                    <p class="generic-name">Paracetamol</p>
                                                </div>
                                            </div>
                                            <div class="company-info">
                                                <div class="c-info" >
                                                <p class="company-name">Kemiko Pharmaceuticals Ltd.</p>
                                                <p class="price">TP: <span>60.00</span> | MRP: <span>100.00</span></p>
                                                </div>
                                                <div class="m-share">
                                                    <!-- <i class="fa fa-line-chart good" aria-hidden="true"></i> -->
                                                    <i class="zmdi zmdi-chart good"></i>
                                                    <p>12%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End Competitorr Card Area --> 
                                
                                    <!-- Start Competitorr Card Area --> 
                                    <div class="col-lg-3 col-md-6 col-12 jmi-padding-0-10">
                                        <div class="competitor-card">
                                            <div class="product-info"> 
                                                <img class="product-img" src="../../../../../assets/images/avater.png" alt="Image">
                                                <div class="info">
                                                    <p class="product-name">Atopen 500mg</p>
                                                    <p class="generic-name">Paracetamol</p>
                                                </div>
                                            </div>
                                            <div class="company-info">
                                                <div class="c-info" >
                                                <p class="company-name">Kemiko Pharmaceuticals Ltd.</p>
                                                <p class="price">TP: <span>60.00</span> | MRP: <span>100.00</span></p>
                                                </div>
                                                <div class="m-share">
                                                    <!-- <i class="fa fa-line-chart bad" aria-hidden="true"></i> -->
                                                    <i class="zmdi zmdi-chart bad"></i>
                                                    <p>12%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End Competitorr Card Area --> 

                                    <!-- Start Competitorr Card Area --> 
                                    <div class="col-lg-3 col-md-6 col-12 jmi-padding-0-10">
                                        <div class="competitor-card">
                                            <div class="product-info"> 
                                                <img class="product-img" src="../../../../../assets/images/avater.png" alt="Image">
                                                <div class="info">
                                                    <p class="product-name">Atopen 500mg</p>
                                                    <p class="generic-name">Paracetamol</p>
                                                </div>
                                            </div>
                                            <div class="company-info">
                                                <div class="c-info" >
                                                <p class="company-name">Kemiko Pharmaceuticals Ltd.</p>
                                                <p class="price">TP: <span>60.00</span> | MRP: <span>100.00</span></p>
                                                </div>
                                                <div class="m-share">
                                                    <!-- <i class="fa fa-line-chart" aria-hidden="true"></i> -->
                                                    <i class="zmdi zmdi-chart"></i>
                                                    <p>12%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End Competitorr Card Area --> 

                                    <!-- Start Competitorr Card Area --> 
                                    <div class="col-lg-3 col-md-6 col-12 jmi-padding-0-10">
                                        <div class="competitor-card">
                                            <div class="product-info"> 
                                                <img class="product-img" src="../../../../../assets/images/avater.png" alt="Image">
                                                <div class="info">
                                                    <p class="product-name">Atopen 500mg</p>
                                                    <p class="generic-name">Paracetamol</p>
                                                </div>
                                            </div>
                                            <div class="company-info">
                                                <div class="c-info" >
                                                <p class="company-name">Kemiko Pharmaceuticals Ltd.</p>
                                                <p class="price">TP: <span>60.00</span> | MRP: <span>100.00</span></p>
                                                </div>
                                                <div class="m-share">
                                                    <!-- <i class="fa fa-line-chart" aria-hidden="true"></i> -->
                                                    <i class="zmdi zmdi-chart"></i>
                                                    <p>12%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End Competitorr Card Area --> 
                                
                                    <!-- Start Competitorr Card Area --> 
                                    <div class="col-lg-3 col-md-6 col-12 jmi-padding-0-10">
                                        <div class="competitor-card">
                                            <div class="product-info"> 
                                                <img class="product-img" src="../../../../../assets/images/avater.png" alt="Image">
                                                <div class="info">
                                                    <p class="product-name">Atopen 500mg</p>
                                                    <p class="generic-name">Paracetamol</p>
                                                </div>
                                            </div>
                                            <div class="company-info">
                                                <div class="c-info" >
                                                <p class="company-name">Kemiko Pharmaceuticals Ltd.</p>
                                                <p class="price">TP: <span>60.00</span> | MRP: <span>100.00</span></p>
                                                </div>
                                                <div class="m-share">
                                                    <!-- <i class="fa fa-line-chart" aria-hidden="true"></i> -->
                                                    <i class="zmdi zmdi-chart"></i>
                                                    <p>12%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End Competitorr Card Area -->  
                                </div>
                                </div>
                            </div>
                            <!------------ End Competitors Tab Content Area ------------>  

                            <!------------ Start Ledger Tab Content Area ------------> 
                            <div id="tab-ledger" class="tab-pane">
                                <div class="row ledgerStock-Area">
                                    <div class="col-lg-4">
                                        <div class="treeArea">
                                            <div class="treeHeader">
                                                <div class="form-group" style="padding: 0;">
                                                    <i class="fa fa-search"> </i>
                                                    <input type="text" placeholder="Search by Name or code" class="form-control">
                                                </div>
                                            </div>
                                
                                            <div class="treeItems">
                                                <SecondarySidebarLedger 
                                                    :SBU_LIST_MENU_WAREHOUSE="SBU_LIST_MENU_WAREHOUSE"
                                                    :SBU_LIST_MENU_WAREHOUSE_PLANT_INFO="SBU_LIST_MENU_WAREHOUSE_PLANT_INFO"
                                                    v-on:store_id="getSBUListMenuWarehouseStoreId"/>
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div class="col-lg-8">
                                        <div class="treeContent">
                                            <div class="contentHeader">
                                                <h5>Current Stock: <span>{{ SELECTED_PROD_DETAILS.current_stock ? SELECTED_PROD_DETAILS.current_stock : 0 }}</span></h5>
                                                <h5>Available Stock: <span>{{ SELECTED_PROD_DETAILS.available_stock ? SELECTED_PROD_DETAILS.available_stock : 0 }}</span></h5>
                                            </div>
                                
                                            <table class="ledgerStock-Area-table">
                                                <thead>
                                                    <tr>
                                                        <th style="flex-basis: 20%;">Date</th>
                                                        <th style="flex-basis: 50%;">Description</th>
                                                        <th style="flex-basis: 15%;">Received</th>
                                                        <th style="flex-basis: 15%;">Issued</th>
                                                    </tr>
                                                </thead>
                                
                                                <tbody>
                                                    <tr v-for="(item, i) in STORE_SBU_LIST_MENU_WAREHOUSE" :key="i">
                                                        <td style="flex-basis: 20%;"><p>{{ item.date ? prodDateFormatT4(item.date) : '' }}</p></td>
                                                        <td style="flex-basis: 50%;"><p>{{ item.description ? item.description : '' }}</p></td>
                                                        <td style="flex-basis: 15%;"><p>{{ item.received ? item.received : '' }}</p></td>
                                                        <td style="flex-basis: 15%;"><p>{{ item.issued ? item.issued : '' }}</p></td>
                                                    </tr>
                                                    <tr v-if="!STORE_SBU_LIST_MENU_WAREHOUSE">
                                                        <td colspan="4"><p>No data found</p></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!------------ End Ledger Tab Content Area ------------> 
                                
                            <!------------ Start Stock Position Tab Content Area ------------> 
                            <div id="tab-stock-position" class="tab-pane ">
                                <div class="row ledgerStock-Area">
                                    <div class="col-lg-4">
                                        <div class="treeArea">
                                            <div class="treeHeader">
                                                <div class="form-group" style="padding: 0;">
                                                    <i class="fa fa-search"></i>
                                                    <input type="text" placeholder="Search by Name or code" class="form-control">
                                                </div>
                                            </div>
                                            
                                            <div class="treeItems">
                                                <SecondarySidebarStockPosition 
                                                    :SELECTED_PROD_SBU_PROD_DETAILS="SELECTED_PROD_SBU_PROD_DETAILS"
                                                    v-on:warehouse_info="getWarehouseInfo"/>
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div class="col-lg-8">
                                        <div class="treeContent">
                                            <div class="contentHeader">
                                                <h5>Current Stock: <span>{{ SELECTED_PROD_DETAILS.current_stock ? SELECTED_PROD_DETAILS.current_stock : 0 }}</span></h5>
                                                <h5>Available Stock: <span>{{ SELECTED_PROD_DETAILS.available_stock ? SELECTED_PROD_DETAILS.available_stock : 0 }}</span></h5>
                                            </div>
                
                                            <table class="ledgerStock-Area-table">
                                                <thead>
                                                    <tr>
                                                        <th style="flex-basis: 50%;">Store</th>
                                                        <th style="flex-basis: 20%;">Current Stock</th>
                                                        <th style="flex-basis: 20%;">Blocked Stock</th>
                                                        <th style="flex-basis: 10%;"><a data-toggle="modal" data-target="#Transfer-Stock" v-if="WAREHOUSE_STORE_INFO__FROM_COMPONENT" @click="setTransferStockDefaultValue"> <i class="material-icons" data-toggle="tooltip" data-placement="bottom" title="Transfer" aria-hidden="true">compare_arrows</i> </a></th>
                                                    </tr>
                                                </thead>
                                            
                                                <tbody>
                                                    <tr v-for="(item, i) in WAREHOUSE_STORE_INFO__FROM_COMPONENT" :key="i">
                                                        <td style="flex-basis: 50%;"><p>{{ item.store_name }}</p></td>
                                                        <td style="flex-basis: 20%;"><p>{{ item.wh_store_stock_info[0] ? (item.wh_store_stock_info[0].current_stock ? item.wh_store_stock_info[0].current_stock : 0)  : 0 }}</p></td>
                                                        <td style="flex-basis: 20%;"><p>{{ item.wh_store_stock_info[0] ? (item.wh_store_stock_info[0].blocked_stock ? item.wh_store_stock_info[0].blocked_stock : 0) : 0 }}</p></td>
                                                        <td style="flex-basis: 10%;"> </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        
                                            <!-- Start Stock Transfer Modal -->
                                            <div class="modal" id="Transfer-Stock" tabindex="-1" role="dialog" aria-labelledby="TransferStock" aria-hidden="true" style="width: 400px; border-radius: 4px;">
                                                <div class="modal-dialog modal-dialog-centered" role="document" style="margin: 0;">
                                                    <div class="modal-content" style="padding: 16px; border: none;">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title" id="changePhoto">Store Transfer</h5>
                                                            <button type="button" id="transfer-stock-close-btn" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <form class="modal-body">
                                                        <div class="row">
                                                            <div class="col-lg-12 form-group">
                                                                <label for="store_from">Store From <span class="current-stock">(Current Stock: <span>{{ selected_store_current_stock }}</span>)</span></label>
                                                                <select class="form-control" id="store_from" v-model="stock_position_modal_store_from" @change="warehouseStoreFromOnChange">
                                                                    <option :value="null" selected>Select a Store</option>
                                                                    <option v-for="(item, i) in WAREHOUSE_STORE_INFO__FROM_COMPONENT" :key="i" :value="item">{{ item.store_name }}</option>
                                                                </select>
                                                            </div>
                                                            <div class="col-lg-12 form-group" v-if="WAREHOUSE_STORE_INFO_BATCH_LOT__FROM_COMPONENT">
                                                                <label for="batch_lot">Batch Lot <span class="current-stock">(Current Stock: <span>{{ selected_batch_lot_current_stock }}</span>)</span></label>
                                                                <select class="form-control" id="batch_lot" v-model="stock_position_modal_batch_lot" @change="selectedBatchLotOnChange">
                                                                    <option :value="null" selected>Select an option</option>
                                                                    <option v-for="(item, i) in WAREHOUSE_STORE_INFO_BATCH_LOT__FROM_COMPONENT" :key="i" :value="item">{{ item.batch_lot_no }}</option>
                                                                </select>
                                                            </div>
                                                            <div class="col-lg-12 form-group">
                                                                <label for="store_to">Store To <span class="current-stock">(Current Stock: <span>{{ selected_store_to_current_stock }}</span>)</span></label>
                                                                <select class="form-control" id="store_to" v-model="stock_position_modal_store_to" @change="warehouseStoreToOnChange">
                                                                    <option :value="null" selected>Select a Store</option>
                                                                    <option v-for="(item, i) in WAREHOUSE_STORE_INFO__FROM_COMPONENT" :key="i" :value="item">{{ item.store_name }}</option>
                                                                </select>
                                                            </div>
                                                            <div class="col-lg-12 form-group">
                                                                <label for="quantity">Quantity</label>
                                                                <input type="number" v-model="stock_position_modal_stock_qty" class="form-control" id="quantity" placeholder="Enter Quantity">
                                                            </div>
                                                        </div>
                                                        </form>
                                                        <div class="modal-footer justify-content-center">
                                                            <button type="button" class="btn btn-primary btn-global" @click="transferStockSaveBtnClickHandler">Save</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        <!-- Start Stock Transfer Modal -->
                                        </div>
                                    </div>
                                </div> 
                            </div>
                            <!------------ End Stock Position Tab Content Area ------------> 

                            <!------------ Start Documents Tab Content Area ------------> 
                            <div id="tab-documents" class="tab-pane ">
                                <div class="tab-content-header">
                                    <h5></h5>
                                    <div class="btn-group">
                                        <!-- <button class="btn btn-primary btn-save" role="button">Save</button> -->
                                        <button class="btn btn-primary btn-save" data-toggle="modal" data-target=".upload-document-file-modal" role="button" @click="openDocumentUploadModalClickHandler">Upload</button>
                                        <!-- <a class="btn-edit" ><i class="zmdi zmdi-edit"></i></a> -->
                                    </div>
                                    <div id="upload_document_file_modal" class="modal upload-document-file-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="width: 70%;">
                                        <div class="modal-dialog modal-lg modal-dialog-centered" style="margin: 0; max-width: unset;">
                                            <div class="modal-content" style="border: none;">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="changePhoto">Upload Document</h5>
                                                    <button type="button" id="docs_modal_close_btn" class="close" data-dismiss="modal" aria-label="Close" @click="documentModalCloseClickHandler" style="width: 50px;">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <form class="modal-body">
                                                    <div class="form-group">
                                                        <input type="file" @change="imageChooseEventHandler($event)" accept="image/x-png,image/gif,image/jpeg" class="form-control-file" style="padding-top: 7px;">
                                                    </div>
                                                    <div class="form-group">
                                                        <p class="jmi-lvl" style="float: unset;">Select file type</p>
                                                        <!-- <span class="right-icon"><i class="fas fa-chevron-right"></i></span> -->
                                                        <select title="Pick a customer" class="selectpicker" v-model="document_file_type_on_change" @change="onChangeFileTypeDropdown()">
                                                            <option v-for="(file, m) in DOCUMENT_FILE_TYPE_LIST" :key="m" :value="file.id">{{ file.element_name }}</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group">
                                                        <input v-model="prod_document_upload_title" type="text" class="form-control-file" id="file-title" placeholder="Enter title">
                                                    </div>
                                                    <div class="form-group">
                                                        <textarea v-model="prod_document_upload_description" class="form-control" id="file-description" rows="3" placeholder="Enter Description"></textarea>
                                                    </div>
                                                </form>
                                                <div class="modal-footer justify-content-center">
                                                    <button type="button" class="btn btn-primary btn-save blue" @click="uploadDocumentFileClickHandler">Upload</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!------------ End Create Offer Modal------------>
                                </div>

                                <div class="documents-scroll inner-scroll">
                                    <div class="row">

                                        
                                        <div class="col-lg-3 col-md-4 col-12" v-for="(item, i) in SELECTED_PROD_DOCS_DETAILS" :key="i">
                                            <!-- PHOTO -->
                                            <div class="document-file" v-if="parseInt(item.blob_info.object_type) === 131">
                                                <div class="thumbnail">
                                                    <div class="view">
                                                        <i class="view-btn fa fa-eye"></i>
                                                    </div>
                                                    <div class="cover">
                                                        <img alt="image" class="img-responsive" src="../../../../../assets/images/products/documents.jpg">
                                                    </div>
                                                </div>
                                                <div class="file-name">
                                                    <div>
                                                        <p>{{ item.doc_title }}</p>
                                                        <small>Created : {{ prodDateFormatT4(item.created_at) }}</small>
                                                    </div>
                                                    <div class="action-btn">
                                                        <i class="zmdi zmdi-download"></i>
                                                        <i class="zmdi zmdi-delete"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- SCANNED DOCUMENT -->
                                            <div class="document-file" v-if="parseInt(item.blob_info.object_type) === 132">
                                                <div class="thumbnail">
                                                    <div class="view">
                                                        <i class="view-btn fa fa-eye"></i>
                                                    </div>
                                                    <div class="cover">
                                                        <!-- <i class="fa fa-file-pdf-o"></i> -->
                                                        <i class="zmdi zmdi-collection-pdf"></i>
                                                    </div>
                                                </div>
                                                <div class="file-name">
                                                    <div>
                                                        <p>{{ item.doc_title }}</p>
                                                        <small>Created : {{ prodDateFormatT4(item.created_at) }}</small>
                                                    </div>
                                                    <div class="action-btn">
                                                        <i class="zmdi zmdi-download"></i>
                                                        <i class="zmdi zmdi-delete"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- WORD DOCUMENT -->
                                            <div class="document-file" v-if="parseInt(item.blob_info.object_type) === 133">
                                                <div class="thumbnail">
                                                    <div class="view">
                                                        <i class="view-btn fa fa-eye"></i>
                                                    </div>
                                                    <div class="cover">
                                                        <i class="fa fa-file"></i>
                                                    </div>
                                                </div>
                                                <div class="file-name">
                                                    <div>
                                                        <p>{{ item.doc_title }}</p>
                                                        <small>Created : {{ prodDateFormatT4(item.created_at) }}</small>
                                                    </div>
                                                    <div class="action-btn">
                                                        <i class="zmdi zmdi-download"></i>
                                                        <i class="zmdi zmdi-delete"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- EXCEL DOCUMENT -->
                                            <div class="document-file" v-if="parseInt(item.blob_info.object_type) === 134">
                                                <div class="thumbnail">
                                                    <div class="view">
                                                        <i class="view-btn fa fa-eye"></i>
                                                    </div>
                                                    <div class="cover">
                                                        <i class="fa fa-file"></i>
                                                    </div>
                                                </div>
                                                <div class="file-name">
                                                    <div>
                                                        <p>{{ item.doc_title }}</p>
                                                        <small>Created : {{ prodDateFormatT4(item.created_at) }}</small>
                                                    </div>
                                                    <div class="action-btn">
                                                        <i class="zmdi zmdi-download"></i>
                                                        <i class="zmdi zmdi-delete"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- PDF DOCUMENT -->
                                            <div class="document-file" v-if="parseInt(item.blob_info.object_type) === 135">
                                                <div class="thumbnail">
                                                    <div class="view">
                                                        <i class="view-btn fa fa-eye"></i>
                                                    </div>
                                                    <div class="cover">
                                                        <!-- <i class="fa fa-file-pdf-o"></i> -->
                                                        <i class="zmdi zmdi-collection-pdf"></i>
                                                    </div>
                                                </div>
                                                <div class="file-name">
                                                    <div>
                                                        <p>{{ item.doc_title }}</p>
                                                        <small>Created : {{ prodDateFormatT4(item.created_at) }}</small>
                                                    </div>
                                                    <div class="action-btn">
                                                        <i class="zmdi zmdi-download"></i>
                                                        <i class="zmdi zmdi-delete"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- File -->
                                        <!-- <div class="col-lg-3 col-md-4 col-12">
                                            <div class="document-file">
                                                <div class="thumbnail">
                                                    <div class="view">
                                                        <i class="view-btn fa fa-eye"></i>
                                                    </div>
                                                    <div class="cover">
                                                        <i class="fa fa-file"></i>
                                                    </div>
                                                </div>
                                                <div class="file-name">
                                                    <div>
                                                        <p>Document 2021.doc</p>
                                                        <small>Added: April 14, 2021</small>
                                                    </div>
                                                    <div class="action-btn">
                                                        <i class="zmdi zmdi-download"></i>
                                                        <i class="zmdi zmdi-delete"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> -->
                                        
                                        <!-- Chart -->
                                        <!-- <div class="col-lg-3 col-md-4 col-12">
                                            <div class="document-file">
                                                <div class="thumbnail">
                                                    <div class="view">
                                                        <i class="view-btn fa fa-eye"></i>
                                                    </div>
                                                    <div class="cover"> -->
                                                        <!-- <i class="fa fa-bar-chart"></i> -->
                                                        <!-- <i class="zmdi zmdi-chart"></i>
                                                    </div>
                                                </div>
                                                <div class="file-name">
                                                    <div>
                                                        <p>Document 2021.doc</p>
                                                        <small>Added: April 14, 2021</small>
                                                    </div>
                                                    <div class="action-btn">
                                                        <i class="zmdi zmdi-download"></i>
                                                        <i class="zmdi zmdi-delete"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> -->
                                        
                                        <!-- PDF -->
                                        <!-- <div class="col-lg-3 col-md-4 col-12">
                                            <div class="document-file">
                                                <div class="thumbnail">
                                                    <div class="view">
                                                        <i class="view-btn fa fa-eye"></i>
                                                    </div>
                                                    <div class="cover"> -->
                                                        <!-- <i class="fa fa-file-pdf-o"></i> -->
                                                        <!-- <i class="zmdi zmdi-collection-pdf"></i>
                                                    </div>
                                                </div>
                                                <div class="file-name">
                                                    <div>
                                                        <p>Document 2021.doc</p>
                                                        <small>Added: April 14, 2021</small>
                                                    </div>
                                                    <div class="action-btn">
                                                        <i class="zmdi zmdi-download"></i>
                                                        <i class="zmdi zmdi-delete"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> -->
                                        
                                        <!-- IMAGE -->
                                        <!-- <div class="col-lg-3 col-md-4 col-12">
                                            <div class="document-file">
                                                <div class="thumbnail">
                                                    <div class="view">
                                                        <i class="view-btn fa fa-eye"></i>
                                                    </div>
                                                    <div class="cover">
                                                        <img alt="image" class="img-responsive" src="../../../../../assets/images/products/documents.jpg">
                                                    </div>
                                                </div>
                                                <div class="file-name">
                                                    <div>
                                                        <p>Document 2021.doc</p>
                                                        <small>Added: April 14, 2021</small>
                                                    </div>
                                                    <div class="action-btn">
                                                        <i class="zmdi zmdi-download"></i>
                                                        <i class="zmdi zmdi-delete"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> -->
                                        
                                    </div>
                                </div>
                            </div>
                            <!------------ End Documents Tab Content Area ------------> 
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <!-- Order Creating Modal -->
        <div class="modal-popup-section order-proceed-modal" v-if="prod_creating_progressbar">
            <div class="modal-popup-section-inner order-proceed-modal-inner">
                <div id="progressbar" class="jmi-progressbar">
                    <v-progress-circular indeterminate color="primary"></v-progress-circular>
                    <p>{{ prod_creating_progressbar_msg ? prod_creating_progressbar_msg : 'Product creating inprogress' }}</p>
                </div>
            </div>
        </div>
        <!-- Delete Product Offer -->
        <div class="modal-popup-section order-proceed-modal" v-if="confirmation_popup_modal">
            <div class="modal-popup-section-inner order-proceed-modal-inner">
                <span class="proceed-popup-icon"><i class="zmdi zmdi-check-circle"></i></span>
                <p class="popup-text">{{ confirmation_popup_modal_title }}</p>
                <p class="popup-desc">{{ confirmation_popup_modal_description }}</p>
                <span class="divider"></span>
                <div class="popup-submit-section">
                <div class="popup-cancel-btn-section">
                    <span @click="cancelConfirmationPopupModalClickHandler">Cancel</span>
                </div>
                <div class="popup-confirm-btn-section">
                    <span @click="confirmConfirmationPopupModalClickHandler">Confirm</span>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ERPSidebarService from "../../../../../service/ERPSidebarService";
const service = new ERPSidebarService();
import JMIFilter from '../../../../../functions/JMIFIlter'
const jmiFilter = new JMIFilter()
import GlobalDateFormat from '../../../../../functions/GlobalDateFormat'
const globalDateFormat = new GlobalDateFormat()
import SecondarySidebarLedger from '../../../../../components/master_layout/SecondarySidebar_4Stage/SecondarySidebarLedger'
import SecondarySidebarStockPosition from '../../../../../components/master_layout/SecondarySidebar_4Stage/SecondarySidebarStockPosition'

import DatePicker from 'vue2-datepicker'

export default {
    props: [
                "SELECTED_PROD_DETAILS", 
                "SELECTED_PROD_ATTRIBUTES_DETAILS", 
                "SELECTED_PROD_PRICE_DETAILS", 
                "SELECTED_PROD_OFFER_DETAILS",
                "SELECTED_PROD_SBU_PROD_DETAILS",
                "SELECTED_PROD_DOCS_DETAILS",
                "ALL_PRODS_LIST_IN_DB"
            ],
    components: {
        DatePicker,
        SecondarySidebarLedger,
        SecondarySidebarStockPosition,
    },
    data() {
        return {
            PRODUCTS_LIST: [],
            PRIORITY_CLASS_PRODUCTS_MODAL: [],
            SELECTED_PRODUCTS_LIST__PRODUCT_MODAL: [],
            prod_class_id_prod_modal: null,
            prod_creating_progressbar: false,
            prod_creating_progressbar_msg: null,

            // Product Basic Tab Content Area
            product_description: null,
            product_name: null,
            product_group: null,
            other_code: null,
            product_type: null,
            product_code: null,
            old_code: null,
            manufacture: null,
            vendor: null,
            code_4p: null,
            country_origin: null,
            batch_size: null,
            cost_goods_per_unit: null,
            commercial_unit_measure: null,
            ims_code: null,
            commercial_unit_measure_quantity: null,
            commercial_pack_size: null,
            hs_code: null,
            export_unit_measure: null,
            export_pack_size: null,
            total_stock: null,
            owner_sbu_id: null,
            shelf_life: null,
            imported_from: null,

            // Detail Attributes Tab Content Area
            prod_dtl_element_strength: null,
            prod_dtl_element_generic_name: null,
            prod_dtl_element_thrp_class: null,
            prod_dtl_element_dosage_form: null,

            // Pricing Tab Content Area
            prod_price_tab_trade_price: null,
            prod_price_tab_manufacture_price: null,
            prod_price_tab_max_retail_price: null,
            prod_price_tab_max_trade_price: null,
            prod_price_tab_min_trade_price: null,
            prod_price_tab_vat: null,
            prod_price_tab_vat_pct: null,

            update_prod_trade_price: null,
            update_prod_manufacture_price: null,
            update_prod_maximum_retail_price: null,
            update_prod_maximum_trade_price: null,
            update_prod_minimum_trade_price: null,
            update_prod_vat_price: null,
            update_prod_vat_ptc_price: null,

            // Offers Tab Content Area
            UPDATE_OFFER_ENABLE: false,
            offer_type_offers_modal: null,
            datetime: '',
            range: '',
            OFFERS_LIST: [],
            OFFERS: [
                { name: 'Percentage Discount'}, 
                { name: 'Fixed Discount'},
                { name: 'Bonus Product'},
                { name: 'Free Product'}
            ],
            CREATE_OFFER_TYPE: null,

            prod_offer_minimum_qty: null,

            prod_offer_discount_p: null,

            // ##########################################
            prod_offer_now_price_d: 0.00,
            prod_offer_for_d: 1,
            prod_offer_pack_size: null,
            // ##########################################
            prod_offer_discount_tp_d: null,

            prod_offer_min_qty_b: null,
            prod_offer_bonus_qty_b: null,

            prod_offer_min_qty_f: null,
            free_prod_offer_selected_prod: null,
            prod_offer_free_qty_f: null,

            ALL_PRODS_LIST: [],
            PROD_OFFER_FROM_SERVICE: null,

            // PRICE ALGO FROM LEADER
            ALGO_UNIT_PRICE_NOW: null,
            ALGO_MODIFIED_TP: null,
            ALGO_DISCOUNT_TP: null,
            ALGO_CHEMIST_PROFIT: null,
            // PRICE ALGO FROM LEADER

            OFFER_EDITING_SELECTED_OFFER_ID: null,

            // LEDGER
            SBU_LIST_MENU_WAREHOUSE: null,
            SBU_LIST_MENU_WAREHOUSE_PLANT_INFO: null,
            STORE_SBU_LIST_MENU_WAREHOUSE: null,

            // STOCK POSITION
            WAREHOUSE_STORE_INFO__FROM_COMPONENT: null,
            WAREHOUSE_STORE_INFO_BATCH_LOT__FROM_COMPONENT: null,

            selected_store_current_stock: 0,
            selected_batch_lot_current_stock: 0,
            selected_store_to_current_stock: 0,

            stock_position_modal_store_from: null,
            stock_position_modal_batch_lot: null,
            stock_position_modal_store_to: null,
            stock_position_modal_stock_qty: null,

            // DOCUMENTS
            UPLOADED_IMAGE_NAME: null,
            UPLOADED_IMAGE_DATA_BASE_64: null,
            prod_document_upload_title: null,
            prod_document_upload_description: null,

            document_file_type_on_change: null,
            DOCUMENT_FILE_TYPE_LIST: null,

            // CONFIRMATION MODAL
            confirmation_popup_modal: false,
            confirmation_popup_modal_for: null,
            confirmation_popup_modal_title: null,
            confirmation_popup_modal_description: null,
            CONFIRMATION_POPUP_MODAL_DATA: null,
        }
    },
    computed: {},
    created() {},
    async mounted() {
        await this.SEARCH_PRODUCT_DATA_LIST__FROM_SERVICE()
        await this.PRODUCT_CLASS_ELEMENT_LIST__FROM_SERVICE()
        await this.SBU_LIST_MENU_WAREHOUSE__FROM_SERVICE()
    },
    methods: {
        // ---------------------------------------------------------------------------
        // HTML ATTRIBUTES
        checkElementLengthToSetComma(index, element) {
            return (index < element.length - 1) ? ', ' : ''
        },
        // Product Basic Tab Content Area
        setProductBasicTabContentArea(prod_details) {
            // Product Basic Tab Content Area
            this.product_description = prod_details.product_info.prod_description
            this.product_name = prod_details.product_info.prod_name
            this.product_group = prod_details.product_info.prod_group
            this.other_code = prod_details.product_info.other_code
            this.product_type = prod_details.product_info.prod_type
            this.product_code = prod_details.product_info.prod_code
            this.old_code = prod_details.product_info.old_code
            this.manufacture = prod_details.product_info.manufacturer
            this.vendor = prod_details.product_info.vendors
            this.code_4p = prod_details.product_info.code_4p
            this.country_origin = prod_details.product_info.country_origin
            this.batch_size = prod_details.product_info.batch_size
            this.cost_goods_per_unit = prod_details.product_info.unit_cog
            this.commercial_unit_measure = prod_details.product_info.com_uom
            this.ims_code = prod_details.product_info.code_ims
            this.commercial_unit_measure_quantity = prod_details.product_info.com_uom_qty
            this.commercial_pack_size = prod_details.product_info.com_pack_size
            this.hs_code = prod_details.product_info.hs_code

            this.export_unit_measure = prod_details.product_info.exp_uom
            this.export_pack_size = prod_details.product_info.exp_pack_size
            this.total_stock = prod_details.product_info.total_stock
            this.owner_sbu_id = prod_details.product_info.owner_sbu_id
            this.shelf_life = prod_details.product_info.have_shelf_life
            this.imported_from = prod_details.is_imported

            // Fixed Discount price - Offer tab
            this.prod_offer_pack_size = prod_details.product_info.com_uom
            // Fixed Discount price - Offer tab
        },
        // Detail Attributes Tab Content Area
        setProductAttributesTabContentArea(attr_details) {
            // Detail Attributes Tab Content Area
            this.prod_dtl_element_strength = attr_details.strength
            this.prod_dtl_element_generic_name = this.checkElementLengthToSetComma_prodDtlAttrTab(attr_details.generic_name)
            this.prod_dtl_element_thrp_class = this.checkElementLengthToSetComma_prodDtlAttrTab(attr_details.thrp_class)
            // this.prod_dtl_element_dosage_form = this.checkElementLengthToSetComma_prodDtlAttrTab(attr_details.dosage_form)
            this.prod_dtl_element_dosage_form = attr_details.dosage_form.element_name
        },
        // Pricing Tab Content Area
        setProductPriceTabContentArea(price_details) {
            // Pricing Tab Content Area
            this.prod_price_tab_trade_price = price_details.trade_price
            this.prod_price_tab_manufacture_price = price_details.manufacture_price
            this.prod_price_tab_max_retail_price = price_details.maximum_retail_price
            this.prod_price_tab_max_trade_price = price_details.maximum_trade_price
            this.prod_price_tab_min_trade_price = price_details.minimum_trade_price
            this.prod_price_tab_vat = price_details.vat
            this.prod_price_tab_vat_pct = price_details.vat_pct

            // Fixed Discount price - Offer tab
            // this.prod_offer_now_price_d = price_details.trade_price
            // this.prod_offer_for_d = 1
            // Fixed Discount price - Offer tab

            

            // PRICE ALGO FROM LEADER
            // this.ALGO_UNIT_PRICE_NOW = null
            // this.ALGO_MODIFIED_TP = null
            // this.ALGO_DISCOUNT_TP = null
            // this.ALGO_CHEMIST_PROFIT = null
            // PRICE ALGO FROM LEADER
        },
        updateProdPriceEditBtnClickHandler() {
            this.update_prod_trade_price = this.prod_price_tab_trade_price
            this.update_prod_manufacture_price = this.prod_price_tab_manufacture_price
            this.update_prod_maximum_retail_price = this.prod_price_tab_max_retail_price
            this.update_prod_maximum_trade_price = this.prod_price_tab_max_trade_price
            this.update_prod_minimum_trade_price = this.prod_price_tab_min_trade_price
            this.update_prod_vat_price = this.prod_price_tab_vat
            this.update_prod_vat_ptc_price = this.prod_price_tab_vat_pct
        },
        async updateProdPriceClickHandler() {
            console.log(this.update_prod_vat_price)
            let prod_price_dtl = {
                base_tp: this.update_prod_trade_price ? this.update_prod_trade_price : 0,
                manufacture_price: this.update_prod_manufacture_price ? this.update_prod_manufacture_price : 0,
                base_mrp: this.update_prod_maximum_retail_price ? this.update_prod_maximum_retail_price : 0,
                max_tp: this.update_prod_maximum_trade_price ? this.update_prod_maximum_trade_price : 0,
                min_base_tp: this.update_prod_minimum_trade_price ? this.update_prod_minimum_trade_price : 0,
                base_vat: this.update_prod_vat_price ? this.update_prod_vat_price : 0,
                vat_pct: this.update_prod_vat_ptc_price ? this.update_prod_vat_ptc_price : 0,
            }
            await this.UPDATE_PROD_PRICE__FROM_SERVICE(prod_price_dtl)
        },
        // -----------------------------------------------------------------------------------------
        // Offers Tab Content Area Starts
        setProductOfferTabContentArea(prod_offer_details) {
            // Offers Tab Content Area
            // console.log(prod_offer_details)
            // console.log(this.SELECTED_PROD_OFFER_DETAILS)
            let offers = []
            offers.push(prod_offer_details.bonus_discount)
            offers.push(prod_offer_details.fixed_discount)
            offers.push(prod_offer_details.free_product)
            offers.push(prod_offer_details.percentage_discount)
            // console.log(prod_offer_details)
            console.log(offers)
            // for(let i=0; i<prod_offer_details.length; i++) {
            //     for(let j=0; j<prod_offer_details[i].length; j++) {
            //         offers.push(prod_offer_details[i][j])
            //     }
            // }
            // console.log(offers)
            this.OFFERS_LIST = []
            console.log(Object.keys(prod_offer_details))
            // for(let i=0; i<Object.keys(prod_offer_details).length; i++) {
            for(let i=0; i<offers.length; i++) {
                // console.log(Object.keys(prod_offer_details)[i])
                // let objName = Object.keys(prod_offer_details)[i]
                // console.log(prod_offer_details.Object.keys(prod_offer_details)[i])

                // if(offers[i].length === undefined) {
                for(let j=0; j<offers[i].length; j++) {
                    // if(offers[i].status) {
                        console.log(offers[i][j].id)
                        let offer = {
                            // offer_name: this.checkOfferType(Object.keys(prod_offer_details)[i]),
                            // offer_type: this.checkOfferType(Object.keys(prod_offer_details)[i]),
                            // offer_type: this.checkOfferType(offers[i].offer_type),

                            // offer_dis_pct: offers[i].discount_pct,
                            offer_discount_period: globalDateFormat.dateFormatT4(offers[i][j].start_date) + ' - ' + globalDateFormat.dateFormatT4(offers[i][j].valid_until),
                            // offer_status: offers[i].is_active === 'Y' ? 'Active' : 'Inactive',
                            // offer_created_by: 'Dummy',
                            // offer_is_present: offers[i].min_qty ? offers[i].min_qty : null,


                            // COMMON
                            id          : offers[i][j].id ? offers[i][j].id : null,
                            is_active   : offers[i][j].is_active ? offers[i][j].is_active : null,
                            min_qty     : offers[i][j].min_qty ? offers[i][j].min_qty : null,
                            offer_type  : offers[i][j].offer_type ? offers[i][j].offer_type : null,
                            start_date  : offers[i][j].start_date ? offers[i][j].start_date : null,
                            status      : offers[i][j].status ? offers[i][j].status : null,
                            valid_until : offers[i][j].valid_until ? offers[i][j].valid_until : null,


                            // PERCENTAGE
                            discount_pct    :  offers[i][j].discount_pct ? offers[i][j].discount_pct : null,

                            // FIXED DISCOUNT
                            discount_tp: offers[i][j].discount_tp ? offers[i][j].discount_tp : null,

                            // BONUS
                            bonus_on    : offers[i][j].bonus_on ? offers[i][j].bonus_on : null,
                            bonus_qty   : offers[i][j].bonus_qty ? offers[i][j].bonus_qty : null,

                            // FREE
                            free_prod_id    : offers[i][j].free_prod_id ? offers[i][j].free_prod_id : null,
                            free_prod_qty   : offers[i][j].free_prod_qty ? offers[i][j].free_prod_qty : null,
                            free_req_qty    : offers[i][j].free_req_qty ? offers[i][j].free_req_qty : null,


                        }
                        // if(offer.offer_is_present) {
                            this.OFFERS_LIST.push(offer)
                        // }
                    // }
                }
            }
            console.log(this.OFFERS_LIST)

        },
        getProdNameById(prod_id) {
            if(prod_id) {
                for(let i=0; i<this.ALL_PRODS_LIST_IN_DB.length; i++) {
                    if(parseInt(prod_id) === parseInt(this.ALL_PRODS_LIST_IN_DB[i].prod_id)) {
                        return this.ALL_PRODS_LIST_IN_DB[i].prod_name
                    }
                }
            }
        },
        createTableStatusClass(item) {
            console.log(item)
            if( (new Date(item.valid_until).getTime() > new Date().getTime()) && parseInt(item.status) === 1) {
                return 'active'
            } else {
                return 'deactive'
            }
            // console.log(item)
            // return ''
        },
        checkOfferType(offer) {
            let offer_name = null
            switch(offer) {
                case 'bonus_discount': case 'B':
                    offer_name = 'Bonus Discount'
                    break
                case 'fixed_discount': case 'D':
                    offer_name = 'Fixed Discount'
                    break
                case 'free_product': case 'F':
                    offer_name = 'Free Product'
                    break
                case 'percentage_discount': case 'P':
                    offer_name = 'Percentage Discount'
                    break
                default:
                    break
            }
            return offer_name
        },
        checkOfferType_Short(offer) {
            let offer_name = null
            switch(offer) {
                case 'bonus_discount': case 'B':
                    offer_name = 'Bonus'
                    break
                case 'fixed_discount': case 'D':
                    offer_name = 'Discount'
                    break
                case 'free_product': case 'F':
                    offer_name = 'Free'
                    break
                case 'percentage_discount': case 'P':
                    offer_name = 'Percentage'
                    break
                default:
                    break
            }
            return offer_name
        },
        // checkOfferActivity(startDt, endDt) {
        //     console.log(startDt)
        //     console.log(endDt)
        //     if(startDt && endDt) {
                
        //         let dd = new Date().getDate()
        //         let mm = new Date().getMonth() + 1
        //         let yyyy = new Date().getFullYear()

        //         let dd_st = startDt.split(' ')[0].split('-')[2]
        //         let mm_st = startDt.split(' ')[0].split('-')[1]
        //         let yyyy_st = startDt.split(' ')[0].split('-')[0]

        //         let dd_ed = endDt.split(' ')[0].split('-')[2]
        //         let mm_ed = endDt.split(' ')[0].split('-')[1]
        //         let yyyy_ed = endDt.split(' ')[0].split('-')[0]
                
        //         console.log(dd + '    ' + mm + '    ' + yyyy)

        //         console.log(parseInt(yyyy_st) + '    ' + parseInt(yyyy) + '    ' + parseInt(yyyy_ed))
        //         console.log(parseInt(mm_st) + '    ' + parseInt(mm) + '    ' + parseInt(mm_ed))
        //         console.log(parseInt(dd_st) + '    ' + parseInt(dd) + '    ' + parseInt(dd_ed))

        //         if(parseInt(yyyy_ed) >= parseInt(yyyy) && parseInt(yyyy_st) <= parseInt(yyyy)) {
        //             if(parseInt(mm_ed) >= parseInt(mm) && parseInt(mm_st) <= parseInt(mm)) {
        //                 if(parseInt(dd_ed) >= parseInt(dd) && parseInt(dd_st) <= parseInt(yyyy)) {
        //                     return 'Active'
        //                 }
        //             }
        //         } else {
        //             return 'Inactive'
        //         }
        //     }
        // },
        checkElementLengthToSetComma_prodDtlAttrTab(attr_elem) {
            // console.log(attr_elem)
            let attr_name_list = ''
            for(let i=0; i<attr_elem.length; i++) {
                attr_name_list += attr_elem[i].element_name
                if(i !== (attr_elem.length - 1)) {
                    attr_name_list += ', '
                }
            }
            // console.log(attr_name_list)
            return attr_name_list
        },
        createOfferBtnClickHandler() {
            this.closeAllOfferTypeOfferModal()
            console.log(this.UPDATE_OFFER_ENABLE)
            if(this.UPDATE_OFFER_ENABLE) {
                this.UPDATE_OFFER_ENABLE = false
            }
        },
        // Offers Tab Content Area
        onChangeOfferTypeOfferModal() {
            console.log(this.offer_type_offers_modal)
            this.prod_offer_minimum_qty = null
            switch(this.offer_type_offers_modal) {
                case "Percentage Discount":
                    this.togglingOnChangeOfferTypeOfferModal('percentage_discount')
                    this.CREATE_OFFER_TYPE = 'P'
                    break
                case "Fixed Discount":
                    this.togglingOnChangeOfferTypeOfferModal('fixed_discount')
                    this.CREATE_OFFER_TYPE = 'D'
                    break
                case "Bonus Product":
                    this.togglingOnChangeOfferTypeOfferModal('bonus_product')
                    this.CREATE_OFFER_TYPE = 'B'
                    break
                case "Free Product":
                    this.togglingOnChangeOfferTypeOfferModal('free_product')
                    this.CREATE_OFFER_TYPE = 'F'
                    break
                default:
                    break
            }
        },
        togglingOnChangeOfferTypeOfferModal(selector) {
            let selector_list = ['percentage_discount', 'fixed_discount', 'bonus_product', 'free_product']
            for(let i=0; i<selector_list.length; i++) {
                document.getElementById(selector_list[i]).className = 'row hide'
            }
            document.getElementById(selector).className = 'row'
        },
        closeAllOfferTypeOfferModal() {
            console.log('closeAllOfferTypeOfferModal')
            let selector_list = ['percentage_discount', 'fixed_discount', 'bonus_product', 'free_product']
            for(let i=0; i<selector_list.length; i++) {
                console.log(selector_list[i])
                if(document.getElementById(selector_list[i]).className === 'row') {
                    document.getElementById(selector_list[i]).className = 'row hide'
                }
            }
            this.range = null
            this.offer_type_offers_modal = null
            document.getElementById('offer_type').selectedIndex = 0
        },
        createOfferClickHandler() {
            let offer_type = this.CREATE_OFFER_TYPE
            let min_qty = this.prod_offer_minimum_qty
            if(!this.range) {
                alert('Date range is empty')
            }
            let start_date = globalDateFormat.dateFormatT4(this.range[0])
            let valid_until = globalDateFormat.dateFormatT4(this.range[1])
            
            // Percent
            let discount_pct = this.prod_offer_discount_p
            // Discount
            // ##########################################
            // this.prod_offer_now_price_d = null
            // this.prod_offer_for_d = 1

            // PRICE ALGO FROM LEADER
            // this.ALGO_UNIT_PRICE_NOW = parseFloat(this.prod_offer_now_price_d) / parseFloat(this.prod_offer_for_d)
            // this.ALGO_MODIFIED_TP = parseFloat(this.ALGO_UNIT_PRICE_NOW) - parseFloat(this.prod_price_tab_vat)
            // this.ALGO_DISCOUNT_TP = parseFloat(this.prod_price_tab_trade_price) - parseFloat(this.ALGO_MODIFIED_TP)
            // this.ALGO_CHEMIST_PROFIT = ( parseFloat(this.prod_price_tab_max_retail_price) / parseFloat(this.ALGO_UNIT_PRICE_NOW) ) * 100
            // PRICE ALGO FROM LEADER
            this.prod_offer_discount_tp_d = Number(this.ALGO_DISCOUNT_TP).toFixed(2)
            // ##########################################
            // let price_now = this.prod_offer_now_price_d
            // let discount_tp = this.prod_offer_discount_tp_d
            // Bonus
            // let bonus_on = this.prod_offer_min_qty_b
            // let bonus_qty = this.prod_offer_bonus_qty_b
            // Free
            let free_req_qty = this.prod_offer_min_qty_f
            let free_prod_id = this.free_prod_offer_selected_prod
            let free_prod_qty = this.prod_offer_free_qty_f

            // console.log(this.range[0])
            // console.log(this.range[1])
            // console.log(globalDateFormat.dateFormatT4(this.range[0]))
            // console.log(globalDateFormat.dateFormatT4(this.range[1]))

            let offer_details = {
                offer_type: offer_type ? offer_type : null,
                min_qty: min_qty ? min_qty : null,
                start_date: start_date ? start_date : null,
                valid_until: valid_until ? valid_until : null,
                // Percentage
                discount_pct: null,
                // Discount
                price_now: null,
                discount_tp: null,
                // Bonus
                bonus_on: null,
                bonus_qty: null,
                // Free
                free_req_qty: null,
                free_prod_id: null,
                free_prod_qty: null,
            }

            console.log(offer_type + '  ' + min_qty + '  ' + start_date + '  ' + valid_until + '  ' + discount_pct)

            if(offer_type !== null && start_date !== null && valid_until !== null) {
                if(offer_type === 'P' && discount_pct !==null && min_qty !== null) {
                    console.log('P offer created')
                    Object.assign(offer_details, {discount_pct: discount_pct ? discount_pct : null})
                    this.CREATE_NEW_PROD_OFFER__FROM_SERVICE(offer_details)
                // } else if (offer_type === 'D' && discount_tp !==null && min_qty !== null) {
                } else if (offer_type === 'D' && this.prod_offer_discount_tp_d !==null) {
                    console.log('D offer created')
                    Object.assign(offer_details, {price_now: this.prod_offer_now_price_d ? this.prod_offer_now_price_d : null})
                    Object.assign(offer_details, {min_qty: this.prod_offer_for_d ? this.prod_offer_for_d : null})
                    Object.assign(offer_details, {discount_tp: this.prod_offer_discount_tp_d ? this.prod_offer_discount_tp_d : null})
                    this.CREATE_NEW_PROD_OFFER__FROM_SERVICE(offer_details)
                } else if (offer_type === 'B' && this.prod_offer_min_qty_b !==null && this.prod_offer_bonus_qty_b !== null) {
                    console.log('B offer created')
                    Object.assign(offer_details, {min_qty: this.prod_offer_min_qty_b ? this.prod_offer_min_qty_b : null})
                    Object.assign(offer_details, {bonus_on: this.prod_offer_min_qty_b ? this.prod_offer_min_qty_b : null})
                    Object.assign(offer_details, {bonus_qty: this.prod_offer_bonus_qty_b ? this.prod_offer_bonus_qty_b : null})
                    this.CREATE_NEW_PROD_OFFER__FROM_SERVICE(offer_details)
                } else if (offer_type === 'F' && free_req_qty !==null && free_prod_id !== null && free_prod_qty !== null) {
                    console.log('F offer created')
                    Object.assign(offer_details, {min_qty: free_req_qty ? free_req_qty : null})
                    Object.assign(offer_details, {free_req_qty: free_req_qty ? free_req_qty : null})
                    Object.assign(offer_details, {free_prod_id: free_prod_id ? free_prod_id : null})
                    Object.assign(offer_details, {free_prod_qty: free_prod_qty ? free_prod_qty : null})
                    this.CREATE_NEW_PROD_OFFER__FROM_SERVICE(offer_details)
                } else {
                    alert('Check your data to create offer is null')
                }
            } else {
                alert('offer_type or min qty or date is null')
            }

        },
        // Updating offer
        async offerEditClickHandler(item, index) {
            this.OFFER_EDITING_SELECTED_OFFER_ID = item.id
            this.closeAllOfferTypeOfferModal()
            console.log(item)
            console.log(index)
            this.UPDATE_OFFER_ENABLE = true
            document.getElementById('modal_create_offer_modal').style.display = 'block'

            console.log(this.SELECTED_PROD_DETAILS.id + '    ' + this.SELECTED_PROD_DETAILS.prod_id)
            await this.GET_OFFER_DETAILS_TO_EDIT__FROM_SERVICE(this.SELECTED_PROD_DETAILS.id, this.SELECTED_PROD_DETAILS.prod_id)
            console.log(this.PROD_OFFER_FROM_SERVICE)

            // this.offer_type_offers_modal
            this.offerEditSetOfferTypeInDropdown(item)
            // console.log(new Date(item.offer_discount_period.split(' - ')[0]))
            // console.log(new Date(item.offer_discount_period.split(' - ')[1]))
            // let dt_range = []
            // dt_range.push(new Date(item.offer_discount_period.split(' - ')[0]))
            // dt_range.push(new Date(item.offer_discount_period.split(' - ')[1]))
            let dt_range = []
            dt_range.push(new Date(this.PROD_OFFER_FROM_SERVICE.start_date))
            dt_range.push(new Date(this.PROD_OFFER_FROM_SERVICE.valid_until))
            console.log(dt_range)
            this.range = dt_range
            console.log(this.range)

            // PERCENT
            this.prod_offer_discount_p = this.PROD_OFFER_FROM_SERVICE.discount_pct
            // PERCENT
            
            // PRICE ALGO FROM LEADER
            this.ALGO_UNIT_PRICE_NOW = parseFloat(this.prod_offer_now_price_d ? this.prod_offer_now_price_d : 0) / parseFloat(this.prod_offer_for_d)
            this.ALGO_MODIFIED_TP = parseFloat(this.ALGO_UNIT_PRICE_NOW) - parseFloat(this.prod_price_tab_vat)
            this.ALGO_DISCOUNT_TP = parseFloat(this.prod_price_tab_trade_price) - parseFloat(this.ALGO_MODIFIED_TP)
            this.ALGO_CHEMIST_PROFIT = ( parseFloat(this.prod_price_tab_max_retail_price) / parseFloat(this.ALGO_UNIT_PRICE_NOW) ) * 100
            // PRICE ALGO FROM LEADER
            this.prod_offer_discount_tp_d = Number(this.ALGO_DISCOUNT_TP).toFixed(2)
        },
        offerEditSetOfferTypeInDropdown(item) {
            console.log(this.PROD_OFFER_FROM_SERVICE)
            // this.offer_type_offers_modal = item.offer_type
            this.prod_offer_minimum_qty = this.PROD_OFFER_FROM_SERVICE.min_qty

            switch(item.offer_type) {
                case "Percentage Discount": case 'P':
                    document.getElementById('offer_type').selectedIndex = 0
                    this.CREATE_OFFER_TYPE = 'P'
                    this.togglingOnChangeOfferTypeOfferModal('percentage_discount')
                    this.prod_offer_discount_p = item.offer_dis_pct
                    this.offer_type_offers_modal = "Percentage Discount"
                    break
                case "Fixed Discount": case 'D':
                    document.getElementById('offer_type').selectedIndex = 1
                    this.CREATE_OFFER_TYPE = 'D'
                    this.togglingOnChangeOfferTypeOfferModal('fixed_discount')
                    // ##########################################
                    // this.prod_offer_now_price_d = null
                    // this.prod_offer_for_d = null
                    // ##########################################
                    this.prod_offer_discount_tp_d = item.offer_dis_pct
                    this.offer_type_offers_modal = "Fixed Discount"
                    break
                case "Bonus Product": case "Bonus Discount": case 'B':
                    document.getElementById('offer_type').selectedIndex = 2
                    this.CREATE_OFFER_TYPE = 'B'
                    this.togglingOnChangeOfferTypeOfferModal('bonus_product')
                    this.prod_offer_min_qty_b = this.PROD_OFFER_FROM_SERVICE.bonus_on
                    this.prod_offer_bonus_qty_b = this.PROD_OFFER_FROM_SERVICE.bonus_qty
                    this.offer_type_offers_modal = "Bonus Product"
                    break
                case "Free Product": case 'F':
                    document.getElementById('offer_type').selectedIndex = 3
                    this.CREATE_OFFER_TYPE = 'F'
                    this.togglingOnChangeOfferTypeOfferModal('free_product')
                    this.prod_offer_min_qty_f = this.PROD_OFFER_FROM_SERVICE.free_req_qty
                    this.free_prod_offer_selected_prod = this.PROD_OFFER_FROM_SERVICE.free_prod_id
                    this.prod_offer_free_qty_f = this.PROD_OFFER_FROM_SERVICE.free_prod_qty
                    this.offer_type_offers_modal = "Free Product"
                    break
                default:
                    break
            }
            console.log(this.CREATE_OFFER_TYPE)
        },
        documentModalCloseClickHandler() {
            // if(document.getElementById('docs_modal_close_btn').style.display === 'block') {
            //     document.getElementById('docs_modal_close_btn').style.display = 'none'
            // }
        },
        updateOfferClickHandler() {
            // let offer_details = {
            //     offer_type: this.CREATE_OFFER_TYPE ? this.CREATE_OFFER_TYPE : null,
            //     min_qty: this.prod_offer_minimum_qty ? this.prod_offer_minimum_qty : null,
            //     start_date: this.range ? globalDateFormat.dateFormatT4(this.range[0]) : null,
            //     valid_until: this.range ? globalDateFormat.dateFormatT4(this.range[1]) : null,
            //     // Percentage
            //     discount_pct: this.prod_offer_discount_p ? this.prod_offer_discount_p : null,
            //     // Discount
            //     // ##########################################
            //     // this.prod_offer_now_price_d = null
            //     // this.prod_offer_for_d = null
            //     // ##########################################
            //     discount_tp: this.prod_offer_discount_tp_d ? this.prod_offer_discount_tp_d : null,
            //     // Bonus
            //     bonus_on: this.prod_offer_min_qty_b ? this.prod_offer_min_qty_b : null,
            //     bonus_qty: this.prod_offer_bonus_qty_b ? this.prod_offer_bonus_qty_b : null,
            //     // Free
            //     free_req_qty: this.prod_offer_min_qty_f ? this.prod_offer_min_qty_f : null,
            //     free_prod_id: this.free_prod_offer_selected_prod ? this.free_prod_offer_selected_prod : null,
            //     free_prod_qty: this.prod_offer_free_qty_f ? this.prod_offer_free_qty_f : null,
            // }

            let offer_type = this.CREATE_OFFER_TYPE
            let min_qty = this.prod_offer_minimum_qty
            if(!this.range) {
                alert('Date range is empty')
            }
            let start_date = globalDateFormat.dateFormatT4(this.range[0])
            let valid_until = globalDateFormat.dateFormatT4(this.range[1])
            
            // Percent
            let discount_pct = this.prod_offer_discount_p
            // Discount
            this.prod_offer_discount_tp_d = Number(this.ALGO_DISCOUNT_TP).toFixed(2)
            let discount_tp = this.prod_offer_discount_tp_d
            // Bonus
            let bonus_on = this.prod_offer_min_qty_b
            let bonus_qty = this.prod_offer_bonus_qty_b
            // Free
            let free_req_qty = this.prod_offer_min_qty_f
            let free_prod_id = this.free_prod_offer_selected_prod
            let free_prod_qty = this.prod_offer_free_qty_f
            

            console.log(this.CREATE_OFFER_TYPE)
            let offer_details = {
                offer_type: offer_type ? offer_type : null,
                min_qty: min_qty ? min_qty : null,
                start_date: start_date ? start_date : null,
                valid_until: valid_until ? valid_until : null,
                // Percentage
                discount_pct: null,
                // Discount
                discount_tp: null,
                // Bonus
                bonus_on: null,
                bonus_qty: null,
                // Free
                free_req_qty: null,
                free_prod_id: null,
                free_prod_qty: null,
            }

            console.log(offer_type)
            console.log(offer_type + '  ' + min_qty + '  ' + start_date + '  ' + valid_until + '  ' + discount_pct)

            if(offer_type !== null && start_date !== null && valid_until !== null) {
                if(offer_type === 'P' && discount_pct !== null && min_qty !== null) {
                    console.log('P offer created')
                    Object.assign(offer_details, {discount_pct: discount_pct ? discount_pct : null})
                    this.UPDATE_PROD_OFFER__FROM_SERVICE(offer_details)
                // } else if (offer_type === 'D' && discount_tp !==null && min_qty !== null) {
                } else if (offer_type === 'D' && discount_tp !==null) {
                    console.log('D offer created')
                    Object.assign(offer_details, {min_qty: this.prod_offer_for_d ? this.prod_offer_for_d : null})
                    Object.assign(offer_details, {discount_tp: discount_tp ? discount_tp : null})
                    this.UPDATE_PROD_OFFER__FROM_SERVICE(offer_details)
                } else if (offer_type === 'B' && bonus_on !==null && bonus_qty !== null) {
                    console.log('B offer created')
                    Object.assign(offer_details, {min_qty: bonus_on ? bonus_on : null})
                    Object.assign(offer_details, {bonus_on: bonus_on ? bonus_on : null})
                    Object.assign(offer_details, {bonus_qty: bonus_qty ? bonus_qty : null})
                    this.UPDATE_PROD_OFFER__FROM_SERVICE(offer_details)
                } else if (offer_type === 'F' && free_req_qty !== null && free_prod_id !== null && free_prod_qty !== null) {
                    console.log('F offer created')
                    Object.assign(offer_details, {min_qty: free_req_qty ? free_req_qty : null})
                    Object.assign(offer_details, {free_req_qty: free_req_qty ? free_req_qty : null})
                    Object.assign(offer_details, {free_prod_id: free_prod_id ? free_prod_id : null})
                    Object.assign(offer_details, {free_prod_qty: free_prod_qty ? free_prod_qty : null})
                    this.UPDATE_PROD_OFFER__FROM_SERVICE(offer_details)
                } else {
                    alert('Check your data to create offer is null')
                }
            } else {
                alert('offer_type or min qty or date is null')
            }
            // this.UPDATE_PROD_OFFER__FROM_SERVICE(offer_details)
        },
        offerDeleteClickHandler(item, i) {
            console.log('offerDeleteClickHandler : ' + i)
            console.log(item)
            // this.DELETE_PROD_OFFER__FROM_SERVICE(item)
            if(this.confirmation_popup_modal) {
                this.CONFIRMATION_POPUP_MODAL_DATA = null
                this.confirmation_popup_modal = false
                this.confirmation_popup_modal_for = null
                this.confirmation_popup_modal_title = null
                this.confirmation_popup_modal_description = null
            } else {
                this.CONFIRMATION_POPUP_MODAL_DATA = item
                this.confirmation_popup_modal = true
                this.confirmation_popup_modal_for = 'DELETE PROD OFFER'
                this.confirmation_popup_modal_title = 'Are you sure ?'
                this.confirmation_popup_modal_description = 'You want to delete this offer.'
            }
        },
        // Offers Tab Content Area Ends
        // -----------------------------------------------------------------------------------------
        // Document Tab Content Area Ends
        setProductDocsTabContentArea(prod_docs) {
            console.log(prod_docs)
        },
        prodDateFormatT4(dt) {
            return globalDateFormat.dateFormatT4(dt)
        },
        openDocumentUploadModalClickHandler() {
            this.LOAD_FILE_TYPE__FROM_SERVICE()
        },
        imageChooseEventHandler(event) {
            this.UPLOADED_IMAGE_NAME = null
            this.UPLOADED_IMAGE_DATA_BASE_64 = null
            let file = event.target.files[0]
            this.UPLOADED_IMAGE_NAME = event.target.files[0].name
            let reader = new FileReader();
            reader.onloadend = () => {
                this.UPLOADED_IMAGE_DATA_BASE_64 = reader.result
            }
            reader.readAsDataURL(file)
        },
        uploadDocumentFileClickHandler() {
            console.log('uploadDocumentFileClickHandler')
            // this.UPLOAD_NEW_PROD_DOCUMENT__FROM_SERVICE()
            let path = 'No path'
            console.log(this.UPLOADED_IMAGE_DATA_BASE_64)
            console.log(this.prod_document_upload_title)
            console.log(this.prod_document_upload_description)
            console.log(this.UPLOADED_IMAGE_NAME)
            console.log(path)

            let prod_docs_details = {
                base64_encoded_file : this.UPLOADED_IMAGE_DATA_BASE_64,
                object_type         : this.document_file_type_on_change,
                file_title          : this.prod_document_upload_title,
                file_description    : this.prod_document_upload_description,
                file_original_name  : this.UPLOADED_IMAGE_NAME,
                file_upload_path    : '/customers/docs/'
            }
            this.UPLOAD_NEW_PROD_DOCUMENT__FROM_SERVICE(prod_docs_details)
        },
        offerTabCloseBtnClickHandler() {
            if(document.getElementById('modal_create_offer_modal').style.display === 'block') {
                document.getElementById('modal_create_offer_modal').style.display = 'none'
            }
        },
        // Document Tab Content Area Ends
        // -----------------------------------------------------------------------------------------
        // LEDGER
        getSBUListMenuWarehouseStoreId(value) {
            console.log(value)
            this.STORE_SBU_LIST_MENU_WAREHOUSE__FROM_SERVICE(value, this.SELECTED_PROD_DETAILS.prod_id)
        },
        // LEDGER
        // -----------------------------------------------------------------------------------------
        // Stock Position Tab Content Area Starts
        getWarehouseInfo(value) {
            this.WAREHOUSE_STORE_INFO__FROM_COMPONENT = value.warehouse_store_info
        },
        warehouseStoreFromOnChange() {
            this.selected_store_current_stock = this.stock_position_modal_store_from.wh_store_stock_info[0].current_stock
            this.WAREHOUSE_STORE_INFO_BATCH_LOT__FROM_COMPONENT = this.stock_position_modal_store_from ? this.stock_position_modal_store_from.wh_store_stock_info[0].whss_batch_lot_info : null
        },
        selectedBatchLotOnChange() {
            this.selected_batch_lot_current_stock = this.stock_position_modal_batch_lot.current_stock
        },
        warehouseStoreToOnChange() {
            // console.log(this.stock_position_modal_store_to)
            this.selected_store_to_current_stock = this.stock_position_modal_store_to.wh_store_stock_info[0] ? this.stock_position_modal_store_to.wh_store_stock_info[0].current_stock : 0
        },
        setTransferStockDefaultValue() {
            this.selected_store_current_stock = 0
            this.stock_position_modal_store_from = null
            this.stock_position_modal_store_to = null
            this.stock_position_modal_stock_qty = null
        },
        transferStockSaveBtnClickHandler() {
            console.log(this.stock_position_modal_store_from)
            console.log(this.stock_position_modal_store_to)
            console.log(this.stock_position_modal_stock_qty)

            console.log(this.SELECTED_PROD_DETAILS)

            let transfer_data = {
                from_store_id: this.stock_position_modal_store_from.id,
                to_store_id: this.stock_position_modal_store_to.id,
                prod_id: this.SELECTED_PROD_DETAILS.prod_id,
                batch_lot: this.stock_position_modal_batch_lot.batch_lot_no,
                quantity: this.stock_position_modal_stock_qty,
            }

            this.STOCK_TRANSFER_FOR_SINGLE_PROD__FROM_SERVICE(transfer_data)
        },
        // Stock Position Tab Content Area Starts
        // -----------------------------------------------------------------------------------------

        createNewProductClickHandler() {
            console.log('createNewProductClickHandler')
        },
        changePhotoModalCloseClickHandler() {
            console.log('changePhotoModalCloseClickHandler')
        },
        changePhotoSaveBtnClickHandler() {
            console.log('changePhotoSaveBtnClickHandler')
        },
        saveBtnClickHandler() {
            console.log('saveBtnClickHandler')
        },
        editBtnClickHandler() {
            console.log('editBtnClickHandler')
        },
        // ---------------------------------------------------------------------------
        // PRODUCT MODAL
        addProductBtnClickHandler() {
            this.SELECTED_PRODUCTS_LIST__PRODUCT_MODAL = []
        },
        // checkElementLengthToSetComma(j, element) {
        // return (j < element.length - 1) ? ', ' : ''
        // },
        singleProductClickFromProductList_ProductModal(item) {
            console.log(item)
            this.SELECTED_PRODUCTS_LIST__PRODUCT_MODAL = []
            this.SELECTED_PRODUCTS_LIST__PRODUCT_MODAL.push(item)
        },
        onChangeProdClassIdProdModal() {
            console.log(this.prod_class_id_prod_modal)
        },
        async saveNewSBUProductClickHandler() {
            if(this.prod_class_id_prod_modal && this.SELECTED_PRODUCTS_LIST__PRODUCT_MODAL.length > 0) {
                console.log('save btn clicked')
                let prod_id = this.SELECTED_PRODUCTS_LIST__PRODUCT_MODAL[0].id
                let prod_class_id = this.prod_class_id_prod_modal
                await this.CREATE_NEW_SBU_PRODUCT__FROM_SERVICE(prod_id, prod_class_id)
            } else {
                alert('Product or Product class is empty. Please select both.')
            }
        },
        // ---------------------------------------------------------------------------
        // CONFIRMATION MODAL
        cancelConfirmationPopupModalClickHandler() {
            this.confirmation_popup_modal = false
        },
        confirmConfirmationPopupModalClickHandler() {
            switch(this.confirmation_popup_modal_for) {
                case 'DELETE PROD OFFER':
                    this.DELETE_PROD_OFFER__FROM_SERVICE()
                    break
                default:
                    break
            }
        },
        // ---------------------------------------------------------------------------
        // FILTER
        createSearchString(item) {
            let elements = ''
            for(let i=0; i<item.element.length; i++) {
                elements += item.element[i].code_id + ' ' + item.element[i].element_name + ' '
            }
            return item.base_mrp + ' ' + item.base_tp + ' ' + item.base_vat + ' ' + item.code_id + ' ' + item.display_code + ' ' + item.id + ' ' + item.offer + ' ' + item.prod_class + ' ' + item.prod_code + ' ' + item.prod_id + ' ' + item.prod_name + ' ' + elements
        },
        searchKeyUpHandlerProductModal(value) {
            console.log(value.key)
            let input = document.getElementById("products-modal-search-filter");
            let filter = input.value.toUpperCase();
            let list = document.querySelectorAll('#product-details-details #classification-modal .modal-body .product-card2')
            let txt_selector = "jmi-search-key"

            jmiFilter.searchById_LeftSidebar(filter, list, txt_selector)
        },
        // ------------------------------------------------------------------------------------------------------------------------------------------------------
        // ------------------------------------------------------------------------------------------------------------------------------------------------------
        // SERVICE CALL
        async SEARCH_PRODUCT_DATA_LIST__FROM_SERVICE() {
            this.PRODUCTS_LIST = [];
            await service.getNewProductList_PRODUCTS_DETAILS()
                .then((res) => {
                    console.log(res.data);
                    this.PRODUCTS_LIST = res.data.product_list;
                    console.log(this.PRODUCTS_LIST);
                })
                .catch((err) => {
                    if (err) {
                        this.PRODUCTS_LIST = [];
                        alert("Server Error 500. " + err);
                    }
                });
        },
        async PRODUCT_CLASS_ELEMENT_LIST__FROM_SERVICE() {
            this.PRIORITY_CLASS_PRODUCTS_MODAL = [];
            await service.getProductClassElementList_PRODUCTS_DETAILS()
                .then((res) => {
                    console.log(res.data);
                    this.PRIORITY_CLASS_PRODUCTS_MODAL = res.data.code_elements;

                    // if(this.PRIORITY_CLASS_PRODUCTS_MODAL) {
                    //     setTimeout( () => {
                    //         var options = document.getElementById("priority_class_prod_modal").options;
                    //         options[0].selected = true;
                    //         this.prod_class_id_prod_modal = this.PRIORITY_CLASS_PRODUCTS_MODAL[0].id
                    //     }, 200)
                    // }
                })
                .catch((err) => {
                    if (err) {
                        this.PRIORITY_CLASS_PRODUCTS_MODAL = [];
                        alert("Server Error 500. " + err);
                    }
                });
        },
        async CREATE_NEW_SBU_PRODUCT__FROM_SERVICE(prod_id, prod_class_id) {
            await service.getCreateNewSBUProduct_PRODUCTS_DETAILS(prod_id, prod_class_id)
                .then((res) => {
                    console.log(res.data);
                    if(res.data.response_code === 200 || res.data.response_code === 201) {
                        this.SEARCH_PRODUCT_DATA_LIST__FROM_SERVICE()
                        this.PRODUCT_CLASS_ELEMENT_LIST__FROM_SERVICE()
                        this.prod_class_id_prod_modal = null
                        this.SELECTED_PRODUCTS_LIST__PRODUCT_MODAL = []
                        document.getElementById('classification-modal-close-btn').click()
                        if(document.querySelector(".modal-backdrop.show")) {
                            document.querySelector(".modal-backdrop.show").remove()
                        }
                        this.prod_creating_progressbar = true
                        this.prod_creating_progressbar_msg = res.data.message
                        setTimeout( () => {
                            this.prod_creating_progressbar = false
                            this.prod_creating_progressbar_msg = null
                        }, 1000)
                    } else {
                        // this.prod_class_id_prod_modal = null
                        // this.SELECTED_PRODUCTS_LIST__PRODUCT_MODAL = []
                        // document.getElementById('classification-modal-close-btn').click()
                        this.prod_creating_progressbar = true
                        this.prod_creating_progressbar_msg = res.data.message
                        setTimeout( () => {
                            this.prod_creating_progressbar = false
                            this.prod_creating_progressbar_msg = null
                        }, 1000)
                    }
                })
                .catch((err) => {
                    if (err) {
                        alert('Creating new product problem : ' + err)
                        this.prod_creating_progressbar = false
                        this.prod_class_id_prod_modal = null
                        this.SELECTED_PRODUCTS_LIST__PRODUCT_MODAL = []
                        document.getElementById('classification-modal-close-btn').click()
                    }
                });
        },
        // async SEARCH_ALL_PRODUCT_DATA_LIST__FROM_SERVICE() {
        // this.ALL_PRODS_LIST = [];
        // await service.getSearchProductDataList_CreateOrderDetailsSection()
        //     .then((res) => {
        //     console.log(res.data);
        //     this.ALL_PRODS_LIST = res.data.product_list;
        //     console.log(this.ALL_PRODS_LIST);
        //     })
        //     .catch((err) => {
        //     if (err) {
        //         this.ALL_PRODS_LIST = [];
        //         alert("Server Error 500. " + err);
        //     }
        //     });
        // },

        // PROD PRICE
        async UPDATE_PROD_PRICE__FROM_SERVICE(prod_price_dtl) {
            console.log(this.SELECTED_PROD_DETAILS)
            await service.getUpdateProdPrice_PRODUCTS_DETAILS(this.SELECTED_PROD_DETAILS.id, this.SELECTED_PROD_DETAILS.prod_id, prod_price_dtl)
                .then(res => {
                    console.log(res.data)
                    if(res.data.response_code === 200 || res.data.response_code === 201) {
                        document.getElementById('price_tab_close_modal').click()
                        this.prod_creating_progressbar = true
                        this.prod_creating_progressbar_msg = res.data.message
                        this.$store.state.CHANGES_DETECTED_IN_DETAILS_SECTION = new Date()
                        setTimeout( () => {
                            this.prod_creating_progressbar = false
                            this.prod_creating_progressbar_msg = null
                        }, 1000)
                    } else {
                        // document.getElementById('price_tab_close_modal').click()
                        this.prod_creating_progressbar = true
                        this.prod_creating_progressbar_msg = res.data.message
                        setTimeout( () => {
                            this.prod_creating_progressbar = false
                            this.prod_creating_progressbar_msg = null
                        }, 1000)
                    }
                })
                .catch(err => {
                    if(err) {
                        console.log(err)
                        alert('Price update problem : ' + err)
                    }
                })
        },

        // Create Prod Offer
        async CREATE_NEW_PROD_OFFER__FROM_SERVICE(offer_details) {
            console.log(offer_details)
            await service.getCreateNewProdOffer_PRODUCTS_DETAILS(this.SELECTED_PROD_DETAILS.prod_id, offer_details)
                .then(res => {
                    console.log(res.data)
                    if(res.data.response_code === 200 || res.data.response_code === 201) {
                        document.getElementById('offer_tab_close_modal').click()
                        this.prod_creating_progressbar = true
                        this.prod_creating_progressbar_msg = res.data.message
                        this.$store.state.CHANGES_DETECTED_IN_DETAILS_SECTION = new Date()
                        setTimeout( () => {
                            this.prod_creating_progressbar = false
                            this.prod_creating_progressbar_msg = null
                        }, 1000)
                    } else {
                        // document.getElementById('offer_tab_close_modal').click()
                        this.prod_creating_progressbar = true
                        this.prod_creating_progressbar_msg = res.data.message
                        setTimeout( () => {
                            this.prod_creating_progressbar = false
                            this.prod_creating_progressbar_msg = null
                        }, 1000)
                    }
                })
                .catch(err => {
                    if(err){
                        console.log(err)
                        alert('Creating product offer problem : ' + err)
                    }
                })
        },
        async GET_OFFER_DETAILS_TO_EDIT__FROM_SERVICE(id, prod_id) {
            this.PROD_OFFER_FROM_SERVICE = null
            await service.getEditProdOffer_PRODUCTS_DETAILS(id, prod_id)
                .then(res => {
                    console.log(res.data)
                    if(res.data.response_code === 200 || res.data.response_code === 201) {
                        this.PROD_OFFER_FROM_SERVICE = res.data.prod_offer
                    }
                })
                .catch(err => {
                    if(err) {
                        this.PROD_OFFER_FROM_SERVICE = null
                        console.log(err)
                    }
                })
        },
        async UPDATE_PROD_OFFER__FROM_SERVICE(offer_details) {
            console.log(offer_details)
            await service.getUpdateProdOffer_PRODUCTS_DETAILS(this.OFFER_EDITING_SELECTED_OFFER_ID, this.SELECTED_PROD_DETAILS.prod_id, offer_details)
                .then(res => {
                    console.log(res.data)
                    if(res.data.response_code === 200 || res.data.response_code === 201) {
                        this.UPDATE_OFFER_ENABLE = false
                        this.PROD_OFFER_FROM_SERVICE = null
                        this.OFFER_EDITING_SELECTED_OFFER_ID = null
                        // document.getElementById('offer_tab_close_modal').click()
                        this.offerTabCloseBtnClickHandler()
                        this.prod_creating_progressbar = true
                        this.prod_creating_progressbar_msg = res.data.message
                        this.$store.state.CHANGES_DETECTED_IN_DETAILS_SECTION = new Date()
                        setTimeout( () => {
                            this.prod_creating_progressbar = false
                            this.prod_creating_progressbar_msg = null
                        }, 1000)
                    } else {
                        // document.getElementById('offer_tab_close_modal').click()
                        this.prod_creating_progressbar = true
                        this.prod_creating_progressbar_msg = res.data.message
                        setTimeout( () => {
                            this.prod_creating_progressbar = false
                            this.prod_creating_progressbar_msg = null
                        }, 1000)
                    }
                })
                .catch(err => {
                    if(err) {
                        console.log(err)
                        alert('Product offer update problem : ' + err)
                        this.UPDATE_OFFER_ENABLE = false
                        this.PROD_OFFER_FROM_SERVICE = null
                        this.OFFER_EDITING_SELECTED_OFFER_ID = null
                    }
                })
        },
        async DELETE_PROD_OFFER__FROM_SERVICE() {
            let item = this.CONFIRMATION_POPUP_MODAL_DATA
            console.log(item)
            this.CONFIRMATION_POPUP_MODAL_DATA = null
            this.confirmation_popup_modal = false
            this.confirmation_popup_modal_for = null
            this.confirmation_popup_modal_title = null
            this.confirmation_popup_modal_description = null

            this.prod_creating_progressbar = true
            this.prod_creating_progressbar_msg = 'Please wait...'

            await service.getDeleteProdOffer_PRODUCTS_DETAILS(item.id)
                .then(res => {
                    console.log(res.data)
                    if(res.data.response_code === 200 || res.data.response_code === 201) {
                        this.OFFERS_LIST.forEach(element => {
                            if(parseInt(element.id) === parseInt(item.id)) {
                                this.OFFERS_LIST.splice(element, 1)
                            }
                        });
                        // this.prod_creating_progressbar = true
                        this.prod_creating_progressbar_msg = res.data.message
                        setTimeout( () => {
                            this.prod_creating_progressbar = false
                            this.prod_creating_progressbar_msg = null
                        }, 1000)
                    } else {
                        // this.prod_creating_progressbar = true
                        this.prod_creating_progressbar_msg = res.data.message
                        setTimeout( () => {
                            this.prod_creating_progressbar = false
                            this.prod_creating_progressbar_msg = null
                        }, 1000)
                    }
                })
                .catch(err => {
                    if(err) {
                        console.log(err)
                        alert('Product offer remove problem : ' + err)
                        // this.prod_creating_progressbar = true
                        this.prod_creating_progressbar_msg = err
                        setTimeout( () => {
                            this.prod_creating_progressbar = false
                            this.prod_creating_progressbar_msg = null
                        }, 1000)
                    }
                })
        },
        async LOAD_FILE_TYPE__FROM_SERVICE() {
            await service.getElementListByCode_Deliveries()
                .then(res => {
                    console.log(res.data)
                    this.DOCUMENT_FILE_TYPE_LIST = res.data.element_list
                    this.document_file_type_on_change = this.DOCUMENT_FILE_TYPE_LIST[0].id
                })
        },
        async UPLOAD_NEW_PROD_DOCUMENT__FROM_SERVICE(prod_docs_details) {
            this.prod_creating_progressbar = true
            this.prod_creating_progressbar_msg = 'Please wait...'

            await service.getUploadNewProdDocument_PRODUCTS_DETAILS(this.SELECTED_PROD_DETAILS.prod_id, prod_docs_details)
                .then(res => {
                    console.log(res.data)
                    if(res.data.response_code === 200 || res.data.response_code === 201) {
                        this.SELECTED_PROD_DOCS_DETAILS.push(res.data.product_docs)
                        this.prod_creating_progressbar_msg = res.data.message
                        document.getElementById('docs_modal_close_btn').click()
                        setTimeout( () => {
                            this.prod_creating_progressbar = false
                            this.prod_creating_progressbar_msg = null
                        }, 1000)
                    } else {
                        this.prod_creating_progressbar_msg = res.data.message
                        setTimeout( () => {
                            this.prod_creating_progressbar = false
                            this.prod_creating_progressbar_msg = null
                        }, 1000)
                    }
                })
                .catch(err => {
                    if(err) {
                        console.log(err)
                        alert('Product offer remove problem : ' + err)
                        this.prod_creating_progressbar_msg = err
                        document.getElementById('docs_modal_close_btn').click()
                        setTimeout( () => {
                            this.prod_creating_progressbar = false
                            this.prod_creating_progressbar_msg = null
                        }, 1000)
                    }
                })
        },
        async SBU_LIST_MENU_WAREHOUSE__FROM_SERVICE() {
            this.SBU_LIST_MENU_WAREHOUSE = null
            this.SBU_LIST_MENU_WAREHOUSE_PLANT_INFO = null
            await service.getSBUListMenuWarehouse_PRODUCTS_DETAILS()
                .then(res => {
                    console.log(res.data)
                    console.log(res.data.menu_list)
                    if(res.data.response_code === 200 || res.data.response_code === 201) {
                        this.SBU_LIST_MENU_WAREHOUSE = res.data.menu_list
                        this.SBU_LIST_MENU_WAREHOUSE_PLANT_INFO = res.data.menu_list.plant_info
                    }
                })
                .catch(err => {
                    if(err) {
                        console.log(err)
                        this.SBU_LIST_MENU_WAREHOUSE = null
                        this.SBU_LIST_MENU_WAREHOUSE_PLANT_INFO = null
                    }
                })
        },
        async STORE_SBU_LIST_MENU_WAREHOUSE__FROM_SERVICE(value, prod_id) {
            this.STORE_SBU_LIST_MENU_WAREHOUSE = null
            await service.getStoreSBUListMenuWarehouse_PRODUCTS_DETAILS(value, prod_id)
                .then(res => {
                    console.log(res.data)
                    if(res.data.response_code === 200 || res.data.response_code === 201) {
                        this.STORE_SBU_LIST_MENU_WAREHOUSE = res.data.prod_ledgers
                    }
                })
                .catch(err => {
                    if(err) {
                        console.log(err)
                        this.STORE_SBU_LIST_MENU_WAREHOUSE = null
                    }
                })
        },
        async STOCK_TRANSFER_FOR_SINGLE_PROD__FROM_SERVICE(transfer_data) {
            document.getElementById('transfer-stock-close-btn').click()
            console.log(transfer_data)

            this.prod_creating_progressbar = true
            this.prod_creating_progressbar_msg = 'Please wait...'

            await service.getStockTransferForSingleProd_PRODUCTS_DETAILS(transfer_data)
                .then(res => {
                    console.log(res.data)
                    if(res.data.response_code === 200 || res.data.response_code === 201) {
                        this.prod_creating_progressbar_msg = res.data.message
                        this.stockPositionTransferChanges()
                        // this.$store.state.CHANGES_DETECTED_IN_DETAILS_SECTION = new Date()
                        this.$emit('RELOAD_SELECTED_PROD_DETAILS', this.SELECTED_PROD_DETAILS.prod_id)
                        setTimeout( () => {
                            this.prod_creating_progressbar = false
                            this.prod_creating_progressbar_msg = null
                        }, 1000)
                    } else {
                        this.prod_creating_progressbar_msg = res.data.message
                        setTimeout( () => {
                            this.prod_creating_progressbar = false
                            this.prod_creating_progressbar_msg = null
                        }, 1000)
                    }
                })
                .catch(err => {
                    if(err) {
                        console.log(err)
                        this.prod_creating_progressbar_msg = err
                        setTimeout( () => {
                            this.prod_creating_progressbar = false
                            this.prod_creating_progressbar_msg = null
                        }, 1000)
                    }
                })
        },

        // CHANGES - AFTER API CALL
        stockPositionTransferChanges() {
            // console.log(this.stock_position_modal_store_from)
            // console.log(this.stock_position_modal_store_to)
            // console.log(this.SELECTED_PROD_DETAILS)
            console.log(this.SELECTED_PROD_SBU_PROD_DETAILS)
            this.WAREHOUSE_STORE_INFO__FROM_COMPONENT = null
            setTimeout( () => {
                document.querySelector('.product-details-tab ul li:nth-child(6) a').click()
            }, 2000)
            // console.log(this.stock_position_modal_batch_lot)
            // console.log(this.stock_position_modal_stock_qty)
        },
    },
    watch: {
        SELECTED_PROD_DETAILS(newVal) {
            if(newVal) {
                console.log(newVal)
                this.setProductBasicTabContentArea(newVal)
            }
        },
        SELECTED_PROD_ATTRIBUTES_DETAILS(newVal) {
            if(newVal) {
                console.log(newVal)
                this.setProductAttributesTabContentArea(newVal)
            }
        },
        SELECTED_PROD_PRICE_DETAILS(newVal) {
            if(newVal) {
                console.log(newVal)
                this.setProductPriceTabContentArea(newVal)
            }
        },
        SELECTED_PROD_OFFER_DETAILS(newVal) {
            if(newVal) {
                console.log(newVal)
                // if(newVal.length === undefined) {
                    this.setProductOfferTabContentArea(newVal)
                // }
            }
        },
        SELECTED_PROD_DOCS_DETAILS(newVal) {
            if(newVal) {
                console.log(newVal)
                this.setProductDocsTabContentArea(newVal)
            }
        },
        SELECTED_PROD_SBU_PROD_DETAILS(newVal) {
            if(newVal) {
                console.log(newVal)

                
            }
        },
        prod_offer_now_price_d(newVal) {
            // PRICE ALGO FROM LEADER
            this.ALGO_UNIT_PRICE_NOW = parseFloat(newVal) / parseFloat(this.prod_offer_for_d)
            this.ALGO_MODIFIED_TP = parseFloat(this.ALGO_UNIT_PRICE_NOW) - parseFloat(this.prod_price_tab_vat)
            this.ALGO_DISCOUNT_TP = parseFloat(this.prod_price_tab_trade_price) - parseFloat(this.ALGO_MODIFIED_TP)
            this.ALGO_CHEMIST_PROFIT = ( parseFloat(this.prod_price_tab_max_retail_price) / parseFloat(this.ALGO_UNIT_PRICE_NOW) ) * 100
            // PRICE ALGO FROM LEADER
            this.prod_offer_discount_tp_d = Number(this.ALGO_DISCOUNT_TP).toFixed(2)
        }
    },
}
</script>

<style scoped>
#product-details-details {
  height: calc(100vh - (74px + 54px + 32px));
}
.layout-container {
  height: calc(100vh - (74px + 54px + 32px));
}
.form-group {
  padding: 12px;
}
.form-group input {
  border: 1px solid #e2edfa;
  box-sizing: border-box;
  height: 38px;
  padding: 0 10px;
  font-size: 14px;
}
.form-group input:focus {
    outline           : 0 !important;
    outline-offset    : 0 !important;
    -moz-box-shadow   : none !important;
    -webkit-box-shadow: none !important;
    box-shadow        : none !important;
    /* border: none !important; */
}

#product-details-details #tab-detail-attributes button.btn.btn-primary.btn-block {
    background-color: #0062cc;
}
#product-details-details #change-photo .modal-footer button.btn.btn-primary {
    background-color: #0062cc;
}

#product-details-details #classification-modal .form-group svg {
    position: absolute;
    top: 25px;
    left: 10px;
    color: #AAC0D9;
    font-size: var(--font14);
}
button.modal-prod-save-btn {
    background: #0062cc;
}
button.btn-global.create-product:focus,
button.modal-prod-save-btn:focus {
    background: #0062cc;
}

button.btn-global.create-product:hover,
button.modal-prod-save-btn:hover {
    background: #0062cc;
}
#tab-offers .create-offer-modal .modal-body,
#tab-offers .edit-price-modal .modal-body {
    min-height: 280px;
}
#tab-offers .create-offer-modal .modal-body .input-group input,
#tab-offers .edit-price-modal .modal-body .input-group input {
    width: 1%;
}
#tab-offers .create-offer-modal .modal-body .input-group .input-group-append,
#tab-offers .edit-price-modal .modal-body .input-group .input-group-append {
    height: 38px;
}
.mx-datepicker.mx-datepicker-range {
    /* width: 180px;
    float: right;
    text-align: right; */
}
.mx-datepicker.mx-datepicker-range input {
    width    : 170px;
    float    : right;
    font-size: 12px;
    border      : 1px solid #E1E2E3;
    height   : auto;
    padding  : 6px 0 6px 2px;
}
.mx-input-wrapper .mx-input {
    padding-left: 4px;
}
.mx-datepicker.mx-datepicker-range input:focus {
    outline           : 0;
    outline-offset    : 0;
    -moz-box-shadow   : none;
    -webkit-box-shadow: none;
    box-shadow        : none;
}
.table thead th,
.offer-table tbody td {
    text-align: center;
    vertical-align: middle;
}
.offer-table tbody td {
    border: 1px solid #e9ecef;
}
.offer-table tbody td:last-child {
    border: none;
}
.offer-table tbody td input[type="checkbox"]:not(:checked), 
.offer-table tbody td input[type="checkbox"]:checked {
    pointer-events: none !important;
}

.offer-table tbody td span i.zmdi-check-square {
    font-size: 16px;
    color: var(--blue);
}

.offer-table tbody td span.active i.zmdi-check-square {
    color: var(--blue);
}

.offer-table tbody td span.deactive i.zmdi-check-square {
    color: #6c757d;
}

/* .offer-table tbody td i.zmdi-edit {
    height: 26px;
    width: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font16);
    color: var(--blue);
    margin: 5px;
    border-radius: 100px;
    background-color: var(--bluish-white);
    cursor: pointer;
} */
.offer-table tbody td i.zmdi-delete{
    height: 24px;
    width: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font16);
    color: var(--red);
    margin: 5px;
    border-radius: 100px;
    background-color: var(--redish-white);
    cursor: pointer;
}
#tab-ledger .treeArea .form-group svg,
#tab-stock-position .treeArea .form-group svg {
    position: absolute;
    top: 14px;
    left: 14px;
    color: #AAC0D9;
    font-size: var(--font14);
}
.modal .modal-footer {
    background-color: #FFFFFF;
}
.document-file .thumbnail .cover svg {
    margin: 15px 10px;
    font-size: 70px;
    color: #dadada;
}
.document-file .cover img {
    width: 100%;
}
.document-file .file-name .action-btn svg {
    width: 16px;
    height: 16px;
}
.ledgerStock-Area .treeContent .ledgerStock-Area-table tbody {
  width: 99%;
}
</style>
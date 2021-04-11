<template>
    <div id="product-details-details" class="product-details-details">
      <div class="layout-container">
        <div class="container-fluid">
          <div class="col-12 product-body">
            <div class="row product-header"> 
              <!-- <div class="col-lg-6 col-12"> -->
              <div class="col-lg-6">
                <div class="product-header-info"> 
                  <div class="product-img">
                    <a data-toggle="modal" data-target="#change-photo" >Change</a>
                    <img src="../../../../../assets/images/avater.png" alt="Image">
                  </div>
                  <div class="info">
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

              <div class="row product-details-tab">
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
                      <li class="nav-item">
                          <a class="nav-link" id="details-single-tab" data-toggle="tab" href="#tab-competitors">Competitors</a>
                      </li>
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
                          <div class="tab-content-header">
                              <h5>Product Information</h5>
                              <div class="btn-group">
                                  <button class="btn btn-primary btn-save" @click="saveBtnClickHandler" role="button">Save</button>
                                  <a class="btn-edit btn-active" @click="editBtnClickHandler"><i class="zmdi zmdi-edit"></i></a>
                              </div>
                          </div>
                          <form class="inner-scroll">
                              <div class="row">
                                  <div class="col-lg-9 form-group">
                                      <label for="product-description">Product Description</label>
                                      <textarea class="form-control" id="product-description" rows="3" placeholder="Enter Product Description"></textarea>
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
                                    <h5>Detail Attributes</h5>
                                    <a class="menu" data-toggle="modal" data-target="#manage-attribute-modal"><i class="fa fa-list"></i></a>
                                </div>

                                <ul class="nav nav-tabs flex-column" id="attribute-items">
                                    <!-- <div class="collapse" id="taglist">
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
                                        <button type="button" class="btn btn-primary btn-block">Save</button>
                                    </div> -->

                                    <li class="nav-item">
                                        <a class="nav-link active" id="attr-single-items" href="#attribute1" data-toggle="tab">Indication</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="attr-single-items" href="#attribute2" data-toggle="tab">Therapeutic Class</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="attr-single-items" href="#attribute3" data-toggle="tab">Pharmacology</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="attr-single-items" href="#attribute4" data-toggle="tab">Dosage &amp; Administration</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="attr-single-items" href="#attribute5" data-toggle="tab">Indication</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="attr-single-items" href="#attribute6" data-toggle="tab">Therapeutic Class</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="attr-single-items" href="#attribute7" data-toggle="tab">Pharmacology</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="attr-single-items" href="#attribute8" data-toggle="tab">Dosage &amp; Administration</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="attr-single-items" href="#attribute9" data-toggle="tab">Indication</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="attr-single-items" href="#attribute10" data-toggle="tab">Therapeutic Class</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="attr-single-items" href="#attribute11" data-toggle="tab">Pharmacology</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="attr-single-items" href="#attribute12" data-toggle="tab">Dosage & Administration</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="attr-single-items" href="#attribute8" data-toggle="tab">Dosage & Administration</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="attr-single-items" href="#attribute9" data-toggle="tab">Indication</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="attr-single-items" href="#attribute10" data-toggle="tab">Therapeutic Class</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="attr-single-items" href="#attribute11" data-toggle="tab">Pharmacology</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="attr-single-items" href="#attribute12" data-toggle="tab">Dosage &amp; Administration</a>
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
                                    <h5>Indiction</h5>
                                    <!-- <a class="btn-edit btn-active" ><i class="fa fa-pencil" aria-hidden="true"></i></a> -->
                                    <a class="btn-edit btn-active"><i class="zmdi zmdi-edit"></i></a>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12 form-group">
                                        <label for="indiction_1">Indiction 1</label>
                                        <textarea class="form-control" id="indiction_1" rows="6" placeholder="Enter Product Indiction"></textarea>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane" id="attribute2">
                                <div class="attribute-header">
                                    <h5>Therapeutic Class</h5>
                                    <a class="btn-edit" ><i class="zmdi zmdi-edit"></i></a>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12 form-group">
                                        <label for="indiction_1">Therapeutic Class</label>
                                        <textarea class="form-control" id="indiction_1" rows="6" placeholder="Enter Product Indiction" readonly></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane" id="attribute3">
                                <div class="attribute-header">
                                    <h5>Pharmacology</h5>
                                    <a class="btn-edit" ><i class="zmdi zmdi-edit"></i></a>
                                </div>
                            </div>
                            <div class="tab-pane" id="attribute4">
                                <div class="attribute-header">
                                    <h5>Dosage &amp; Administration</h5>
                                    <a class="btn-edit" ><i class="zmdi zmdi-edit"></i></a>
                                </div>
                            </div>
                            <div class="tab-pane" id="attribute5">
                                <div class="attribute-header">
                                    <h5>Indiction</h5>
                                    <a class="btn-edit" ><i class="zmdi zmdi-edit"></i></a>
                                </div>
                            </div>
                            <div class="tab-pane" id="attribute6">
                                <div class="attribute-header">
                                    <h5>Indiction</h5>
                                    <a class="btn-edit" ><i class="zmdi zmdi-edit"></i></a>
                                </div>
                            </div>
                            <div class="tab-pane" id="attribute7">
                                <div class="attribute-header">
                                    <h5>Indiction</h5>
                                    <a class="btn-edit" ><i class="zmdi zmdi-edit"></i></a>
                                </div>
                            </div>
                            <div class="tab-pane" id="attribute8">
                                <div class="attribute-header">
                                    <h5>Indiction</h5>
                                    <a class="btn-edit" ><i class="zmdi zmdi-edit"></i></a>
                                </div>
                                </div>
                            <div class="tab-pane" id="attribute9">
                                <div class="attribute-header">
                                    <h5>Indiction</h5>
                                    <a class="btn-edit" ><i class="zmdi zmdi-edit"></i></a>
                                </div>
                            </div>
                            <div class="tab-pane" id="attribute10">
                                <div class="attribute-header">
                                    <h5>Indiction</h5>
                                    <a class="btn-edit" ><i class="zmdi zmdi-edit"></i></a>
                                </div>
                            </div>
                            <div class="tab-pane" id="attribute11">
                                <div class="attribute-header">
                                    <h5>Indiction</h5>
                                    <a class="btn-edit" ><i class="zmdi zmdi-edit"></i></a>
                                </div>
                            </div>
                            <div class="tab-pane" id="attribute12">
                                <div class="attribute-header">
                                    <h5>Indiction</h5>
                                    <a class="btn-edit" ><i class="zmdi zmdi-edit"></i></a>
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
                              <h5>Product Information</h5>
                              <div class="btn-group">
                                  <button class="btn btn-primary btn-save"  role="button">Save</button>
                                  <a class="btn-edit btn-active" ><i class="zmdi zmdi-edit"></i></a>
                              </div>
                          </div>

                          <div class="row">
                              <div class="col-lg-3 form-group">
                                  <label for="trade_price">Trade Price</label>
                                  <input type="text" class="form-control" id="trade_price" placeholder="Enter Trade Price">
                              </div>
                              <div class="col-lg-3 form-group">
                                  <label for="manufacture_price">Manufacture Price</label>
                                  <input type="text" class="form-control" id="manufacture_price" placeholder="Enter Manufacture Price">
                              </div>
                              <div class="col-lg-3 form-group">
                                  <label for="maximum_retail_price">Maximum Retail Price</label>
                                  <input type="text" class="form-control" id="maximum_retail_price" placeholder="Enter Maximum Retail Price">
                              </div>
                              <div class="col-lg-3 form-group">
                                  <label for="maximum_trade_price">Maximum Trade Price</label>
                                  <input type="text" class="form-control" id="maximum_trade_price" placeholder="Enter Maximum Trade Price">
                              </div>
                              <div class="col-lg-3 form-group">
                                  <label for="minimum_trade_price">Minimum Trade Price</label>
                                  <input type="text" class="form-control" id="minimum_trade_price" placeholder="Enter Minimum Trade Price">
                              </div>
                              <div class="col-lg-3 form-group">
                                  <label for="vat">Vat</label>
                                  <input type="number" min="0" max="100" class="form-control" id="vat" placeholder="Enter Vat">
                              </div>
                              <div class="col-lg-3 form-group">
                                  <label for="vat_ptc">Vat PTC</label>
                                  <input type="text" class="form-control" id="vat_ptc" placeholder="Enter Vat PTC">
                              </div>
                          </div>
                      </div>
                      <!------------ End Pricing Tab Content Area ------------>

                      <!------------ Start Offers Tab Content Area ------------>
                      <div id="tab-offers" class="tab-pane">
                          <div class="tab-content-header">
                              <h5>Offers</h5>
                              <div class="btn-group">
                                  <button class="btn btn-primary btn-create" data-toggle="modal" data-target=".create-offer-modal" role="button"><i class="fa fa-plus" aria-hidden="true" style="margin-right: 4px;"></i> Create Offer</button>
                              </div>
                              <!------------ Start Create Offer Modal------------>
                              <div class="modal create-offer-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="width: 70%; height: 302px;">
                                <div class="modal-dialog modal-lg modal-dialog-centered" style="margin: 0;">
                                    <div class="modal-content" style="border: none;">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalCenterTitle">Create Offer</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="row">
                                                <div class="col-lg-4 form-group">
                                                    <label for="offer_type">Offer Type</label>
                                                    <select class="form-control" id="offer_type">
                                                        <option :value="null" selected>Select an option</option>
                                                        <option >Percentage Discount</option>
                                                        <option>Fixed Discount</option>
                                                        <option>Bonus Product</option>
                                                        <option>Free Product</option>
                                                        </select>
                                                </div>
                                                <div class="col-lg-4 form-group">
                                                    <label for="offer_name">Offer Name</label>
                                                    <input type="text" class="form-control" id="offer_name" placeholder="Enter Offer Name">
                                                </div>
                                                <div class="col-lg-4 form-group">
                                                    <label for="date_range">Start &amp; End Date</label>
                                                    <input type="date" class="form-control" id="date_range" placeholder="DD/MM/YY - DD/MM/YY">
                                                </div>
                                            </div>

                                        </div>
                                        <!-- <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary">Save changes</button>
                                        </div> -->
                                        <div class="modal-footer justify-content-center">
                                            <button type="button" class="btn btn-primary btn-global">Create Offer</button>
                                        </div>
                                    </div>
                                </div>
                              </div>
                              <!------------ End Create Offer Modal------------>
                          </div>

                          <table class="table offer-table">
                              <thead>
                              <tr>
                                  <th scope="col">SL No</th>
                                  <th scope="col">OFFER NAME</th>
                                  <th scope="col">OFFER TYPE</th>
                                  <th scope="col">DISCOUNT PERIOD</th>
                                  <th scope="col">STATUS</th>
                                  <th scope="col">CREATED BY</th>
                                  <th scope="col">ACTION</th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                  <td>01</td>
                                  <td>New Year Discount Offer</td>
                                  <td>Percentage Discount</td>
                                  <td>20/11/2020 - 06/07/2021</td>
                                  <td><p class="status active"> <i class="fa fa-square mr-1" aria-hidden="true"></i>Active</p></td>
                                  <td>Mehedi Hassan</td>
                                  <td class="action-btn"><span><a class="btn-edit btn-active" style="width: 20px; border-radius: 50%; cursor: pointer;"><i class="zmdi zmdi-edit"></i></a></span> <span class="inactive fa fa-arrow-down" data-toggle="tooltip" data-placement="bottom" title="Inactive"></span></td>
                              </tr>
                              <tr>
                                  <td>01</td>
                                  <td>New Year Discount Offer</td>
                                  <td>Percentage Discount</td>
                                  <td>20/11/2020 - 06/07/2021</td>
                                  <td><p class="status inactive"> <i class="fa fa-square mr-1" aria-hidden="true"></i>Inactive</p></td>
                                  <td>Mehedi Hassan</td>
                                  <td class="action-btn"><span><a class="btn-edit btn-active" style="width: 20px; border-radius: 50%; cursor: pointer;"><i class="zmdi zmdi-edit"></i></a></span> <span class="active fa fa-arrow-up" data-toggle="tooltip" data-placement="bottom" title="Active"></span></td>
                              </tr>
                              <tr>
                                  <td>01</td>
                                  <td>New Year Discount Offer</td>
                                  <td>Percentage Discount</td>
                                  <td>20/11/2020 - 06/07/2021</td>
                                  <td><p class="status active"> <i class="fa fa-square mr-1" aria-hidden="true"></i>Active</p></td>
                                  <td>Mehedi Hassan</td>
                                  <td class="action-btn"><span><a class="btn-edit btn-active" style="width: 20px; border-radius: 50%; cursor: pointer;"><i class="zmdi zmdi-edit"></i></a></span> <span class="inactive fa fa-arrow-down" data-toggle="tooltip" data-placement="bottom" title="Inactive"></span></td>
                              </tr>
                              </tbody>
                          </table>
                      </div>
                      <!------------ End Offers Tab Content Area ------------>

                      <!------------ Start Competitors Tab Content Area ------------>    
                      <div id="tab-competitors" class="tab-pane">
                          <div class="tab-content-header">
                              <h5>Competitors</h5>
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

                      <div id="tab-ledger" class="tab-pane">
                          <div class="tab-content-header">
                              <h5>Ledger</h5>
                              <div class="btn-group">
                                <button class="btn btn-primary btn-save"  role="button">Save</button>
                                <a class="btn-edit" ><i class="zmdi zmdi-edit"></i></a>
                            </div>
                          </div> 
                      </div>
                          
                      <div id="tab-stock-position" class="tab-pane ">
                          <div class="tab-content-header">
                              <h5>Stock Position</h5>
                              <div class="btn-group">
                                <button class="btn btn-primary btn-save"  role="button">Save</button>
                                <a class="btn-edit" ><i class="zmdi zmdi-edit"></i></a>
                            </div>
                          </div>
                      </div>
                      <div id="tab-documents" class="tab-pane ">
                          <div class="tab-content-header">
                              <h5>Documents</h5>
                              <div class="btn-group">
                                <button class="btn btn-primary btn-save"  role="button">Save</button>
                                <a class="btn-edit" ><i class="zmdi zmdi-edit"></i></a>
                            </div>
                          </div>
                      </div>
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
    </div>
</template>

<script>
import ERPSidebarService from "../../../../../service/ERPSidebarService";
const service = new ERPSidebarService();
import JMIFilter from '../../../../../functions/JMIFIlter'
const jmiFilter = new JMIFilter()

export default {
    props: ["SELECTED_PROD_DETAILS"],
    components: {},
    data() {
        return {
            PRODUCTS_LIST: [],
            PRIORITY_CLASS_PRODUCTS_MODAL: [],
            SELECTED_PRODUCTS_LIST__PRODUCT_MODAL: [],
            prod_class_id_prod_modal: null,
            prod_creating_progressbar: false,
            prod_creating_progressbar_msg: null,

            // Product Basic Tab Content Area
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



        }
    },
    computed: {},
    created() {},
    async mounted() {
        await this.SEARCH_PRODUCT_DATA_LIST__FROM_SERVICE()
        await this.PRODUCT_CLASS_ELEMENT_LIST__FROM_SERVICE()
    },
    methods: {
        // ---------------------------------------------------------------------------
        // HTML ATTRIBUTES
        checkElementLengthToSetComma(index, element) {
        return (index < element.length - 1) ? ', ' : ''
        },
        // Product Basic Tab Content Area
        setProductBasicTabContentArea(prod_details) {
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
            this.imported_from = null
        },
        // ---------------------------------------------------------------------------
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
        checkElementLengthToSetComma(j, element) {
        return (j < element.length - 1) ? ', ' : ''
        },
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
        // ---------------------------------------------------------------------------
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
    },
    watch: {
        SELECTED_PROD_DETAILS(newVal) {
            if(newVal) {
                console.log(newVal)
                this.setProductBasicTabContentArea(newVal)
            }
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
</style>
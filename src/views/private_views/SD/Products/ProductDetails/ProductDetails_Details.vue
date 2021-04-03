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
                    <h5 class="product-name">Ace® Power 500mg<span class="tag">New</span></h5>
                    <p class="generic-name">JMI1361465</p>
                    <p class="product-code">Code: <span>45352666647</span></p>
                  </div>
                          <!-- Start Change Photo Modal -->
                          <div class="modal" id="change-photo" tabindex="-1" role="dialog" aria-labelledby="changePhoto" aria-hidden="true">
                              <div class="modal-dialog modal-dialog-centered" role="document">
                              <div class="modal-content">
                                  <div class="modal-header">
                                  <h5 class="modal-title" id="changePhoto">Change Photo</h5>
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="changePhotoModalCloseClickHandler">
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
                      <a @click="createNewProductClickHandler"> <button type="button" class="btn btn-primary btn-global"> <i class="fa fa-plus mr-2"> </i>Create New Product</button></a>
                  </div>
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
                          <a class="nav-link disabled" id="details-single-tab" data-toggle="tab" href="#tab-stock-position">Stock Position</a>
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
                                      <input type="text" class="form-control" id="product_name" placeholder="Enter Product Name">
                                  </div>
                                  <div class="col-lg-3 form-group">
                                      <label for="product_group">Product Group</label>
                                      <input type="text" class="form-control" id="product_group" placeholder="Enter Product Group">
                                  </div>
                                  <div class="col-lg-3 form-group">
                                      <label for="other_code">Other Code</label>
                                      <input type="text" class="form-control" id="other_code" placeholder="Enter Other Code">
                                  </div>
                                  <div class="col-lg-3 form-group">
                                      <label for="product_type">Product Type</label>
                                      <input type="text" class="form-control" id="product_type" placeholder="Enter Product Type">
                                  </div>
                                  <div class="col-lg-3 form-group">
                                      <label for="product_code">Product Code</label>
                                      <input type="text" class="form-control" id="product_code" placeholder="Enter Product Code">
                                  </div>
                                  <div class="col-lg-3 form-group">
                                      <label for="old_code">Old Code</label>
                                      <input type="text" class="form-control" id="old_code" placeholder="Enter Old Code">
                                  </div>
                                  <div class="col-lg-3 form-group">
                                      <label for="manufacturer">Manufacturer</label>
                                      <input type="text" class="form-control" id="manufacturer" placeholder="Enter Manufacturer Name">
                                  </div>
                                  <div class="col-lg-3 form-group">
                                      <label for="vendor">Vendor</label>
                                      <input type="text" class="form-control" id="vendor" placeholder="Enter Vendor Name">
                                  </div>
                                  <div class="col-lg-3 form-group">
                                      <label for="4p_code">4P Code</label>
                                      <input type="text" class="form-control" id="4p_code" placeholder="Enter 4P Code">
                                  </div>
                                  <div class="col-lg-3 form-group">
                                      <label for="country_origin">Country Origin</label>
                                      <input type="text" class="form-control" id="country_origin" placeholder="Enter Country Origin">
                                  </div>
                                  <div class="col-lg-3 form-group">
                                      <label for="batch_size">Batch Size</label>
                                      <input type="text" class="form-control" id="batch_size" placeholder="Batch Size">
                                  </div>
                                  <div class="col-lg-3 form-group">
                                      <label for="cost_goods_per_unit">Cost of Goods per Unit</label>
                                      <input type="text" class="form-control" id="cost_goods_per_unit" placeholder="Enter Cost of Goods per Unit">
                                  </div>
                                  <div class="col-lg-3 form-group">
                                      <label for="commercial_unit_measure">Commercial Unit of Measure</label>
                                      <input type="text" class="form-control" id="commercial_unit_measure" placeholder="Enter Commercial Unit of Measure">
                                  </div>
                                  <div class="col-lg-3 form-group">
                                      <label for="ims_code">IMS Code</label>
                                      <input type="text" class="form-control" id="ims_code" placeholder="Enter IMS Code">
                                  </div>
                                  <div class="col-lg-3 form-group">
                                      <label for="commercial_unit_measure_quantity">Commercial Unit of Measure Quantity</label>
                                      <input type="text" class="form-control" id="commercial_unit_measure_quantity" placeholder="Enter Commercial Unit of Measure Quantity">
                                  </div>
                                  <div class="col-lg-3 form-group">
                                      <label for="commercial_pack_size">Commercial Pack Size</label>
                                      <input type="text" class="form-control" id="commercial_pack_size" placeholder="Enter Commercial Pack Size">
                                  </div>
                                  <div class="col-lg-3 form-group">
                                      <label for="hs_code">HS Code</label>
                                      <input type="text" class="form-control" id="hs_code" placeholder="Enter HS Code">
                                  </div>
                                  <div class="col-lg-3 form-group">
                                      <label for="export_unit_measure">Export Unit of Measure</label>
                                      <input type="text" class="form-control" id="export_unit_measure" placeholder="Enter Export Unit of Measure">
                                  </div>
                                  <div class="col-lg-3 form-group">
                                      <label for="export_pack_size">Export Pack Size</label>
                                      <input type="text" class="form-control" id="export_pack_size" placeholder="Enter Export Pack Size">
                                  </div>
                                  <div class="col-lg-3 form-group">
                                      <label for="total_stock">Total Stock</label>
                                      <input type="text" class="form-control" id="total_stock" placeholder="Enter Total Stock">
                                  </div>
                                  <div class="col-lg-3 form-group">
                                      <label for="owner_sbu_id">Owner SBU ID</label>
                                      <input type="text" class="form-control" id="owner_sbu_id" placeholder="Enter Owner SBU ID">
                                  </div>
                                  <div class="col-lg-3 form-group">
                                      <label for="shelf_life">Shelf Life</label>
                                      <input type="text" class="form-control" id="shelf_life" placeholder="Enter Shelf Life">
                                  </div>
                                  <div class="col-lg-3 form-group">
                                      <label for="imported_from">Imported From</label>
                                      <input type="text" class="form-control" id="imported_from" placeholder="Enter Imported From">
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
                                <a class="menu" data-toggle="collapse" data-target="#taglist" aria-expanded="false" aria-controls="collapseExample"><i class="fa fa-list"></i></a>
                            </div>

                            <ul class="nav nav-tabs flex-column" id="attribute-items">
                                <div class="collapse" id="taglist">
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
                                </div>

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
                                    <a class="nav-link" id="attr-single-items" href="#attribute4" data-toggle="tab">Dosage & Administration</a>
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
                                    <a class="nav-link" id="attr-single-items" href="#attribute12" data-toggle="tab">Dosage & Administration</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div class="col-lg-9">
                            <div class="tab-content attribute-content">

                            <div class="tab-pane active" id="attribute1">
                                <div class="attribute-header">
                                    <h5>Indiction</h5>
                                    <a class="btn-edit btn-active" href=""><i class="fa fa-pencil" aria-hidden="true"></i></a>
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
                                    <a class="btn-edit" href=""><i class="fa fa-pencil" aria-hidden="true"></i></a>
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
                                    <a class="btn-edit" href=""><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <div class="tab-pane" id="attribute4">
                                <div class="attribute-header">
                                    <h5>Dosage & Administration</h5>
                                    <a class="btn-edit" href=""><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <div class="tab-pane" id="attribute5">
                                <div class="attribute-header">
                                    <h5>Indiction</h5>
                                    <a class="btn-edit" href=""><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <div class="tab-pane" id="attribute6">
                                <div class="attribute-header">
                                    <h5>Indiction</h5>
                                    <a class="btn-edit" href=""><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <div class="tab-pane" id="attribute7">
                                <div class="attribute-header">
                                    <h5>Indiction</h5>
                                    <a class="btn-edit" href=""><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <div class="tab-pane" id="attribute8">
                                <div class="attribute-header">
                                    <h5>Indiction</h5>
                                    <a class="btn-edit" href=""><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                </div>
                                </div>
                            <div class="tab-pane" id="attribute9">
                                <div class="attribute-header">
                                    <h5>Indiction</h5>
                                    <a class="btn-edit" href=""><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <div class="tab-pane" id="attribute10">
                                <div class="attribute-header">
                                    <h5>Indiction</h5>
                                    <a class="btn-edit" href=""><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <div class="tab-pane" id="attribute11">
                                <div class="attribute-header">
                                    <h5>Indiction</h5>
                                    <a class="btn-edit" href=""><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <div class="tab-pane" id="attribute12">
                                <div class="attribute-header">
                                    <h5>Indiction</h5>
                                    <a class="btn-edit" href=""><i class="fa fa-pencil" aria-hidden="true"></i></a>
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
                                  <button class="btn btn-primary btn-save" href="#" role="button">Save</button>
                                  <a class="btn-edit btn-active" href=""><i class="fa fa-pencil" aria-hidden="true"></i></a>
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
                                  <button class="btn btn-primary btn-create" data-toggle="modal" data-target=".create-offer-modal" role="button"><i class="fa fa-plus" aria-hidden="true"></i> Create Offer</button>
                              </div>
                              <!------------ Start Create Offer Modal------------>
                              <div class="modal create-offer-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                              <div class="modal-dialog modal-lg modal-dialog-centered">
                                  <div class="modal-content">
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
                                                  <label for="date_range">Start & End Date</label>
                                                  <input type="date" class="form-control" id="date_range" placeholder="DD/MM/YY - DD/MM/YY">
                                              </div>
                                          </div>

                                      </div>
                                      <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
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
                                  <td class="action-btn"><span class="fa fa-pencil" data-toggle="tooltip" data-placement="bottom" title="Edit"></span> <span class="inactive fa fa-arrow-down" data-toggle="tooltip" data-placement="bottom" title="Inactive"></span></td>
                              </tr>
                              <tr>
                                  <td>01</td>
                                  <td>New Year Discount Offer</td>
                                  <td>Percentage Discount</td>
                                  <td>20/11/2020 - 06/07/2021</td>
                                  <td><p class="status inactive"> <i class="fa fa-square mr-1" aria-hidden="true"></i>Inactive</p></td>
                                  <td>Mehedi Hassan</td>
                                  <td class="action-btn"><span class="fa fa-pencil" data-toggle="tooltip" data-placement="bottom" title="Edit"></span> <span class="active fa fa-arrow-up" data-toggle="tooltip" data-placement="bottom" title="Active"></span></td>
                              </tr>
                              <tr>
                                  <td>01</td>
                                  <td>New Year Discount Offer</td>
                                  <td>Percentage Discount</td>
                                  <td>20/11/2020 - 06/07/2021</td>
                                  <td><p class="status active"> <i class="fa fa-square mr-1" aria-hidden="true"></i>Active</p></td>
                                  <td>Mehedi Hassan</td>
                                  <td class="action-btn"><span class="fa fa-pencil" data-toggle="tooltip" data-placement="bottom" title="Edit"></span> <span class="inactive fa fa-arrow-down" data-toggle="tooltip" data-placement="bottom" title="Inactive"></span></td>
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
                                <button class="btn btn-primary btn-save" href="#" role="button">Save</button>
                                <a class="btn-edit btn-active" href=""><i class="fa fa-pencil" aria-hidden="true"></i></a>
                            </div>
                          </div>
                          <div class="scroll-competitor-list">
                            <div class="row">
                            <!-- Start Competitorr Card Area --> 
                            <div class="col-lg-3 col-md-6 col-12">
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
                                            <i class="fa fa-line-chart good" aria-hidden="true"></i>
                                            <p>12%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- End Competitorr Card Area --> 
                           
                            <!-- Start Competitorr Card Area --> 
                            <div class="col-lg-3 col-md-6 col-12">
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
                                            <i class="fa fa-line-chart bad" aria-hidden="true"></i>
                                            <p>12%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- End Competitorr Card Area --> 

                            <!-- Start Competitorr Card Area --> 
                            <div class="col-lg-3 col-md-6 col-12">
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
                                            <i class="fa fa-line-chart" aria-hidden="true"></i>
                                            <p>12%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- End Competitorr Card Area --> 

                            <!-- Start Competitorr Card Area --> 
                            <div class="col-lg-3 col-md-6 col-12">
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
                                            <i class="fa fa-line-chart" aria-hidden="true"></i>
                                            <p>12%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- End Competitorr Card Area --> 
                           
                            <!-- Start Competitorr Card Area --> 
                            <div class="col-lg-3 col-md-6 col-12">
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
                                            <i class="fa fa-line-chart" aria-hidden="true"></i>
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
                                <button class="btn btn-primary btn-save" href="#" role="button">Save</button>
                                <a class="btn-edit" href=""><i class="fa fa-pencil" aria-hidden="true"></i></a>
                            </div>
                          </div> 
                      </div>
                          
                      <div id="tab-stock-position" class="tab-pane ">
                          <div class="tab-content-header">
                              <h5>Stock Position</h5>
                              <div class="btn-group">
                                <button class="btn btn-primary btn-save" href="#" role="button">Save</button>
                                <a class="btn-edit" href=""><i class="fa fa-pencil" aria-hidden="true"></i></a>
                            </div>
                          </div>
                      </div>
                      <div id="tab-documents" class="tab-pane ">
                          <div class="tab-content-header">
                              <h5>Documents</h5>
                              <div class="btn-group">
                                <button class="btn btn-primary btn-save" href="#" role="button">Save</button>
                                <a class="btn-edit" href=""><i class="fa fa-pencil" aria-hidden="true"></i></a>
                            </div>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [],
    components: {},
    data() {
        return {}
    },
    computed: {},
    created() {},
    mounted() {},
    methods: {
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

    },
    watch: {},
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
</style>
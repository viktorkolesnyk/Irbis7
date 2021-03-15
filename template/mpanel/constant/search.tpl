<div class="row">
    <div class="col-md-12">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">{$oLanguage->getDMessage('search')}</h3>
            </div>

            <form id="filter_form" name="filter_form" role="form" action="javascript:void(null)" onsubmit="submit_form(this)">
                <div class="card-body">

                    <div class="row">
                        <!-- body begin -->
                        <div class="col-sm">
                            <div class="form-group">
                                <label>{$oLanguage->GetdMessage('id')}:</label>
                                <input type=text name=search[id] class="form-control btn-sm" value="{$aSearch.id|escape}" maxlength=50>
                            </div>

                        </div>
                        <div class="col-sm">
                            <div class="form-group">
                                <label>{$oLanguage->GetdMessage('key')}:</label>
                                <input type=text name=search[key_] value="{$aSearch.key_|escape}" maxlength=50 class="form-control btn-sm">
                            </div>

                        </div>
                        <div class="col-sm">
                            <div class="form-group">
                                <label>{$oLanguage->GetdMessage('value')}:</label>
                                <input type=text name=search[value] value="{$aSearch.value|escape}" maxlength=50 class="form-control btn-sm">
                            </div>

                        </div>
                        <div class="col-sm">
                            <div class="form-group">
                                <label>{$oLanguage->getDMessage('description')}:</label>
                                <input type=text name=search[description] value="{$aSearch.description|escape}" maxlength=50 class="form-control btn-sm">
                            </div>

                        </div>
                    </div>
                </div>
                <!-- /.card-body -->
                <div class="card-footer">
                    <input type=button class="btn btn-danger btn-sm" value="{$oLanguage->getDMessage('Clear')}"
                           onclick="xajax_process_browse_url('?{$sSearchReturn|escape}')">
                    <input type=submit value='Search' class="btn btn-success btn-sm">

                    <input type=hidden name=action value={$sBaseAction}_search>
                    <input type=hidden name=return value="{$sSearchReturn|escape}">
                </div>
                <!-- /.card-footer -->
            </form>

        </div>
    </div>
</div>
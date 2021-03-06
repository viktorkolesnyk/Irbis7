<?
function SqlCatalogPartCrossStopCall($aData) {
	$sWhere=$aData['where'];
	if ($aData['id'])
	{
		$sWhere.=" and cc.id=".$aData['id'];
	}
	
	if ($aData['pref'])
	{
		$sWhere.=" and cc.pref='".$aData['pref']."'";
	}
	
	if ($aData['source'])
	{
		$sWhere.=" and cc.source='".$aData['source']."'";
	}
	
	if ($aData['aCode']) 
	{
		//$sWhere.=" and cc.code in ('".implode("','",$aData['aCode'])."')";
		$sWhere.=" and (cc.code in ('".implode("','",$aData['aCode'])."') or cc.code_crs in ('".implode("','",$aData['aCode'])."'))";
	}

	if ($aData['join'] == 1) {
		$sJoin = '';
		$sFields = '';
	} 

	$sSql="select cc.*, concat(pref_crs,'_',code_crs) as item_code , ccrs.title as brand
	from cat_cross_stop as cc 
	join cat as ccrs on cc.pref_crs=ccrs.pref
	".$sJoin." 
	where 1=1 "
	.$sWhere;
	
	//join cat as c on cc.pref==c.pref
	//join cat1 as c1 on cc.pref_crs==c1.pref
	
	return $sSql;
}
?>
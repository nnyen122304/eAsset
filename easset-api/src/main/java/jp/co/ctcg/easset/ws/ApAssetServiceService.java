/**
 * ApAssetServiceService.java
 *
 * このファイルはWSDLから自動生成されました / [en]-(This file was auto-generated from WSDL)
 * Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java生成器によって / [en]-(by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.)
 */

package jp.co.ctcg.easset.ws;

public interface ApAssetServiceService extends javax.xml.rpc.Service {
    public java.lang.String getApAssetServiceAddress();

    public jp.co.ctcg.easset.ws.ApAssetService getApAssetService() throws javax.xml.rpc.ServiceException;

    public jp.co.ctcg.easset.ws.ApAssetService getApAssetService(java.net.URL portAddress) throws javax.xml.rpc.ServiceException;
}

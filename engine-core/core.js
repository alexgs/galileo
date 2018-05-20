let gEngine = {};
gEngine.Core = (function() {
    let mCanvas, mContext, mWidth = 800, mHeight = 450;
    mCanvas = document.getElementById('canvas');
    mContext = mCanvas.getContext('2d');
    mCanvas.height = mHeight;
    mCanvas.width = mWidth;

    let mPublic = {
        mWidth,
        mHeight,
        mContext
    };
    return mPublic;
}());

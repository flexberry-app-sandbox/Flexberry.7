package 7.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import 7.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: Запись
 */
@Entity(name = "IIS7Запись")
@Table(schema = "public", name = "Запись")
public class Zapis {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "ВремяНачала")
    private String времяначала;

    @Column(name = "ВремяОкончания")
    private String времяокончания;

    @Column(name = "КодРегистра")
    private Integer кодрегистра;

    @Column(name = "КодЗаявки")
    private Integer кодзаявки;

    @Column(name = "КодЗаписи")
    private Integer кодзаписи;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Zayavka")
    @Convert("Zayavka")
    @Column(name = "Заявка", length = 16, unique = true, nullable = false)
    private UUID _zayavkaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Zayavka", insertable = false, updatable = false)
    private Zayavka zayavka;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Registr")
    @Convert("Registr")
    @Column(name = "Регистр", length = 16, unique = true, nullable = false)
    private UUID _registrid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Registr", insertable = false, updatable = false)
    private Registr registr;


    public Zapis() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public String getВремяНачала() {
      return времяначала;
    }

    public void setВремяНачала(String времяначала) {
      this.времяначала = времяначала;
    }

    public String getВремяОкончания() {
      return времяокончания;
    }

    public void setВремяОкончания(String времяокончания) {
      this.времяокончания = времяокончания;
    }

    public Integer getКодРегистра() {
      return кодрегистра;
    }

    public void setКодРегистра(Integer кодрегистра) {
      this.кодрегистра = кодрегистра;
    }

    public Integer getКодЗаявки() {
      return кодзаявки;
    }

    public void setКодЗаявки(Integer кодзаявки) {
      this.кодзаявки = кодзаявки;
    }

    public Integer getКодЗаписи() {
      return кодзаписи;
    }

    public void setКодЗаписи(Integer кодзаписи) {
      this.кодзаписи = кодзаписи;
    }


}